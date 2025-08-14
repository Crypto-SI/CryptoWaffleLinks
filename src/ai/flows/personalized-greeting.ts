'use server';

/**
 * @fileOverview Generates a personalized greeting based on the time of day.
 *
 * - generateGreeting - A function that generates a personalized greeting.
 * - PersonalizedGreetingInput - The input type for the generateGreeting function.
 * - PersonalizedGreetingOutput - The return type for the generateGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  timeOfDay: z
    .string()
    .describe("The time of day (e.g., 'morning', 'afternoon', 'evening')."),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function generateGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `Generate a personalized greeting for the following time of day: {{{timeOfDay}}}. The greeting should be welcoming and engaging.`,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
