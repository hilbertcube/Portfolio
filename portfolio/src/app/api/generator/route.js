import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// In-memory storage for previous generations
// Note: This will reset when the server restarts
const generationHistory = {
  poetry: [],
  music: []
};

// Maximum number of items to keep in history
const MAX_HISTORY_ITEMS = 10;

export async function POST(req, res) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const data = await req.json();
    const originalPrompt = data.body;
    
    // Determine content type based on prompt
    const contentType = originalPrompt.includes("poem") ? "poetry" : "music";
    
    // Create an enhanced prompt with history context
    let enhancedPrompt = originalPrompt;
    
    if (generationHistory[contentType].length > 0) {
      // Add previous generations as context to avoid repetition
      const historyContext = generationHistory[contentType]
        .slice(-3) // Use the 3 most recent generations
        .join("\n\n-----\n\n");
      
      enhancedPrompt += `\n\nIMPORTANT: I've previously generated the following ${contentType === "poetry" ? "poems" : "music pieces"}. 
Please make your new ${contentType === "poetry" ? "poem" : "music piece"} SUBSTANTIALLY DIFFERENT from these previous ones in style, structure, and content:

${historyContext}

Create something fresh and original that doesn't repeat patterns from these previous generations.`;
    }
    
    // Generate content with the enhanced prompt
    const result = await model.generateContent(enhancedPrompt);
    const response = result.response;
    const output = response.text();
    
    // Store the new generation in history
    generationHistory[contentType].push(output);
    
    // Trim history if it exceeds maximum size
    if (generationHistory[contentType].length > MAX_HISTORY_ITEMS) {
      generationHistory[contentType] = generationHistory[contentType].slice(-MAX_HISTORY_ITEMS);
    }
    
    return NextResponse.json({ output });
  } catch (error) {
    console.error("Error generating content: ", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}