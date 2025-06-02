import { z } from "zod";

export const devSnippetSchema = z.object({
  title: z.string().min(3).max(100),                       
  content: z.string().min(1),                              
  code: z.string().min(1),                                 
  description: z.string().min(5).max(300),                 
  tags: z.array(z.string().min(1).max(20)).max(10),        
  language: z.string().min(1).max(30),                     
  isPublic: z.boolean().default(false),                    
});

