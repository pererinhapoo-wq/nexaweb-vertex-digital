export interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
  deliverables: string;
  techFocus: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  summary: string;
  metricsLabel: string;
  metricsValue: string;
  highlights: string[];
  architecture: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    useCase: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorRole: string;
  segment: string;
  impact: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: string;
}

export interface ProposalFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  message: string;
}
