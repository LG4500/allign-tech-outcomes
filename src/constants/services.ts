export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  methodology: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    tagline: "Future-proofing your strategy",
    description: "Wondering how to get started amidst all the AI chatter? Our team of Business Process experts with experience in multiple industry sectors will use our proven methodology to Identify critical workflows in your organization that may be optimized with AI. This includes outlining the expected outcomes and ROI calculations. Talk to an Expert today.",
    benefits: [
      "Custom AI roadmap aligned with business goals",
      "Implementation of LLMs and generative AI solutions",
      "Data readiness assessment for AI integration",
      "Ethical AI governance and risk management"
    ],
    methodology: "Our methodology starts with a deep dive into your business processes to identify high-impact AI opportunities, followed by iterative prototyping and enterprise-scale deployment.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/ai-consulting-pillar-b5977f3a-1776408517663.webp"
  },
  {
    id: "trusted-fixer",
    title: "Trusted Fixer",
    tagline: "Rescue and recovery",
    description: "When mission-critical enterprise software initiatives stall or underperform, our team specializes in recovery and optimization. We restore stability, resolve operational bottlenecks, and implement practical recommendations to improve reliability, scalability, and user adoption, ensuring your systems deliver the full business value they were designed to achieve.",
    benefits: [
      "Rapid project turnaround and stabilization",
      "Independent technical audits and root cause analysis",
      "Executive-level project governance and oversight",
      "Crisis management and stakeholder realignment"
    ],
    methodology: "We utilize a 'First Principles' approach to dissect project failures, implementing a strict recovery framework that prioritizes immediate stability and long-term delivery.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/trusted-fixer-pillar-3dcf1ce4-1776408518206.webp"
  },
  {
    id: "data-consulting",
    title: "Data Consulting",
    tagline: "Building the foundation",
    description: "We help design and deploy modern data analytics tools, as well as establishing robust data governance and practice structures. Our data consulting team has experience working with large worldwide enterprises, utilizing technologies from major analytics providers.",
    benefits: [
      "Modern data warehouse and lakehouse architecture",
      "Data governance and master data management",
      "Self-service BI and advanced analytics",
      "Real-time data streaming and processing"
    ],
    methodology: "We build data foundations using scalable cloud-native architectures, ensuring data quality, security, and accessibility for business decision-makers.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/data-consulting-pillar-c9adabc4-1776408516790.webp"
  },
  {
    id: "qa-as-third-eye",
    title: "QA as Third Eye",
    tagline: "Independent assurance for complex projects",
    description: "We provide independent Software Quality Assurance consulting and advisory services for enterprise software implementation projects. Our proven methodology audits processes like design, development, testing, and training to prevent defects and reduce risks, ensuring quality is integrated from the start.",
    benefits: [
      "Continuous quality monitoring and risk assessment",
      "Independent validation and verification (IV&V)",
      "Automated testing strategy and implementation",
      "Performance and scalability assurance"
    ],
    methodology: "Acting as an independent 'Third Eye', we embed into your delivery lifecycle to provide objective feedback and early warning signals to project sponsors.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/qa-as-third-eye-pillar-785d5375-1776408518092.webp"
  },
  {
    id: "security-consulting",
    title: "Security Consulting",
    tagline: "Security built for trust and resilience",
    description: "We provide proactive security strategies to protect critical systems and data. Our services include assessing vulnerabilities, strengthening enterprise security frameworks, and reducing operational risk through practical solutions. We cover everything from cybersecurity assessments and governance reviews to compliance, access controls, and secure system architecture.",
    benefits: [
      "Comprehensive security posture assessment",
      "Zero Trust architecture implementation",
      "Incident response and disaster recovery planning",
      "Regulatory compliance (GDPR, HIPAA, SOC2)"
    ],
    methodology: "We move beyond compliance to build 'Resilience by Design', integrating security into every layer of your technology stack and organizational culture.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/security-consulting-pillar-0dfaf5f1-1776408518177.webp"
  },
  {
    id: "cloud-consulting",
    title: "Cloud Consulting",
    tagline: "Cloud strategies that accelerate growth",
    description: "We develop and implement scalable, secure cloud strategies, guiding you from initial assessment and migration to platform optimization and management. This ensures your cloud environment is robust, cost-effective, and fully aligned with your long-term goals.",
    benefits: [
      "FinOps and cloud cost optimization",
      "DevOps and platform engineering",
      "Multi-cloud and hybrid cloud strategy"
    ],
    methodology: "We focus on 'Outcome-Oriented Migration', ensuring that every cloud move delivers tangible improvements in speed, cost, and reliability.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/cloud-consulting-pillar-fac468aa-1776408517233.webp"
  }
];