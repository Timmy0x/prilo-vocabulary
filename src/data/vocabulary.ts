export interface Term {
  id: string;
  word: string;
  definition: string;
  category: string;
  careerClusters: string[];
  example?: string;
}

export const categories = [
  "Marketing",
  "Finance",
  "Business Management",
  "Hospitality",
  "Entrepreneurship"
] as const;

export const careerClusters = [
  "Marketing Management",
  "Business Administration",
  "Hospitality & Tourism",
  "Finance",
  "Entrepreneurship",
  "Business Management & Administration",
  "Professional Selling & Marketing",
  "Integrated Marketing Campaign"
] as const;

export const vocabulary: Term[] = [
  {
    id: "1",
    word: "Market Segmentation",
    definition: "The process of dividing a market into distinct groups of buyers with different needs, characteristics, or behaviors.",
    category: "Marketing",
    careerClusters: ["Marketing Management", "Professional Selling & Marketing", "Integrated Marketing Campaign"],
    example: "A clothing retailer segments their market by age (teens, young adults, adults), lifestyle (athletic, business, casual), and shopping behavior (budget-conscious, luxury seekers)."
  },
  {
    id: "2",
    word: "ROI (Return on Investment)",
    definition: "A performance measure used to evaluate the efficiency of an investment or compare the efficiency of several different investments.",
    category: "Finance",
    careerClusters: ["Finance", "Business Administration", "Entrepreneurship"],
    example: "If you invest $1,000 in marketing and generate $5,000 in sales, your ROI is 400% ($4,000 profit / $1,000 investment × 100)."
  },
  {
    id: "3",
    word: "Value Proposition",
    definition: "A clear statement that explains how your product solves customers' problems, delivers specific benefits, and tells the ideal customer why they should buy from you and not from the competition.",
    category: "Business Management",
    careerClusters: ["Business Management & Administration", "Professional Selling & Marketing", "Entrepreneurship"],
    example: "Tesla's value proposition combines premium electric vehicles with cutting-edge technology and sustainability, appealing to environmentally conscious luxury car buyers."
  }
];