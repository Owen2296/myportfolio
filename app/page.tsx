'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Linkedin,
  ArrowRight,
  Code2,
  Brain,
  Layers,
  Cloud,
  Phone,
  MessageCircle,
  Award,
  MapPin,
  GraduationCap,
  Calendar,
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  Plus,
  Trash2,
  Settings2,
} from 'lucide-react';

/* ─── Cloud Provider SVG Icons ──────────────────────────────────────────── */
function AzureIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.338 6.544h26.038l-27.03 80.455a4.152 4.152 0 0 1-3.933 2.857H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.4a4.152 4.152 0 0 1 3.934-2.857z" fill="url(#azure-a)" />
      <path d="M71.175 60.261H41.462a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.586L71.175 60.261z" fill="#0078D4" />
      <path d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.898L4.252 84.384a4.143 4.143 0 0 0 3.908 5.472h21.071a4.432 4.432 0 0 0 3.37-2.897l5.54-16.33 18.47 17.2a4.236 4.236 0 0 0 2.72 1.027h23.404l-10.332-29.401-28.13.001L59.335 6.544H33.338z" fill="url(#azure-b)" />
      <path d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.929 2.82l25.184 75.086a4.146 4.146 0 0 1-3.929 5.47h29.02a4.146 4.146 0 0 0 3.927-5.47L66.595 9.364z" fill="url(#azure-c)" />
      <defs>
        <linearGradient id="azure-a" x1="46.153" y1="10.174" x2="25.957" y2="93.025" gradientUnits="userSpaceOnUse">
          <stop stopColor="#114A8B" />
          <stop offset="1" stopColor="#0669BC" />
        </linearGradient>
        <linearGradient id="azure-b" x1="56.415" y1="49.476" x2="49.71" y2="52.168" gradientUnits="userSpaceOnUse">
          <stop stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="azure-c" x1="50.21" y1="8.368" x2="60.843" y2="90.792" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3CCBF4" />
          <stop offset="1" stopColor="#2892DF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GcpIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0 0-3.875 0 0 0 0A9.322 9.322 0 0 0 2.38 15.5a9.344 9.344 0 0 0 6.893 9.234 9.322 9.322 0 0 0 6.227-.576A9.344 9.344 0 0 0 21.62 15.5a9.322 9.322 0 0 0-.576-6.227A9.344 9.344 0 0 0 12.19 2.38z" fill="none" />
      <path d="M15.073 7.554l1.895-1.895.099-.633a8.042 8.042 0 0 0-12.88 3.164l.543.073 3.79-.626.293-.3a4.492 4.492 0 0 1 6.26.217z" fill="#EA4335" />
      <path d="M19.834 9.827a8.088 8.088 0 0 0-2.44-3.938l-2.668 2.668a4.482 4.482 0 0 1 1.644 3.557v.448a2.244 2.244 0 0 1 0 4.488h-4.488l-.448.45v2.692l.448.448h4.488a6.036 6.036 0 0 0 3.464-10.813z" fill="#4285F4" />
      <path d="M7.394 20.642h4.488V16.85H7.394a2.229 2.229 0 0 1-.926-.202l-.633.194-1.895 1.895-.157.627a5.995 5.995 0 0 0 3.611 1.278z" fill="#34A853" />
      <path d="M7.394 8.744a6.036 6.036 0 0 0-3.611 10.81l2.69-2.69a2.244 2.244 0 1 1 2.967-3.38l2.69-2.69a6.01 6.01 0 0 0-4.736-2.05z" fill="#FBBC05" />
    </svg>
  );
}

function AwsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.607 34.676c0 1.086.116 1.966.33 2.61.233.645.524 1.348.912 2.109.145.234.204.468.204.683 0 .302-.185.604-.573.906l-1.893 1.262c-.272.176-.543.263-.796.263-.31 0-.62-.156-.931-.45a9.627 9.627 0 0 1-1.116-1.457 24.1 24.1 0 0 1-.96-1.836c-2.417 2.848-5.453 4.272-9.108 4.272-2.603 0-4.672-.741-6.19-2.224-1.519-1.484-2.287-3.457-2.287-5.92 0-2.62.923-4.748 2.788-6.369 1.864-1.62 4.35-2.432 7.486-2.432 1.04 0 2.11.088 3.23.244 1.119.157 2.276.391 3.482.664v-2.257c0-2.345-.49-3.985-1.452-4.942-.981-.956-2.636-1.425-4.983-1.425-1.07 0-2.17.127-3.307.4a24.397 24.397 0 0 0-3.307 1.045 8.794 8.794 0 0 1-1.068.4c-.214.069-.37.107-.467.107-.418 0-.627-.302-.627-.925v-1.475c0-.478.058-.839.194-1.06.136-.224.39-.448.794-.672a16.318 16.318 0 0 1 3.61-1.378A16.18 16.18 0 0 1 10.983 14c3.396 0 5.88.77 7.467 2.313 1.568 1.543 2.36 3.887 2.36 7.032v9.262l-.203.069zm-12.585 4.7c1.003 0 2.044-.185 3.14-.556a6.804 6.804 0 0 0 2.894-1.738c.485-.429.845-.906 1.04-1.455.195-.55.31-1.213.31-1.992v-.956a25.323 25.323 0 0 0-2.779-.517 22.687 22.687 0 0 0-2.837-.185c-2.046 0-3.542.39-4.523 1.19-.981.8-1.461 1.923-1.461 3.388 0 1.368.35 2.392 1.07 3.094.7.712 1.726 1.057 3.062 1.057l.084-.33z" fill="#252F3E" />
      <path d="M37.087 42.93c-.534 0-.893-.088-1.11-.283-.214-.176-.403-.546-.563-1.046l-6.306-20.755c-.16-.517-.242-.858-.242-1.04 0-.42.213-.654.64-.654h2.944c.554 0 .932.088 1.129.283.214.176.385.546.545 1.046l4.51 17.77 4.186-17.77c.14-.517.311-.87.525-1.046.214-.176.612-.283 1.148-.283h2.402c.554 0 .94.088 1.167.283.214.176.403.546.526 1.046l4.228 17.985 4.65-17.985c.16-.517.35-.87.544-1.046.214-.176.593-.283 1.129-.283h2.797c.427 0 .658.215.658.654 0 .127-.02.264-.058.42a4.394 4.394 0 0 1-.204.635l-6.472 20.755c-.16.517-.35.87-.563 1.046-.214.176-.593.283-1.11.283h-2.58c-.554 0-.94-.088-1.167-.283-.214-.195-.403-.546-.525-1.065l-4.151-17.302-4.131 17.283c-.14.517-.31.87-.525 1.065-.214.195-.63.283-1.167.283h-2.58l-.004-.009z" fill="#252F3E" />
      <path d="M62.38 43.565c-1.548 0-3.096-.185-4.59-.556-1.496-.37-2.664-.77-3.474-1.222-.495-.283-.835-.595-.95-.87a2.243 2.243 0 0 1-.165-.8v-1.534c0-.624.234-.926.68-.926.175 0 .35.03.525.088.176.058.438.176.72.293a15.617 15.617 0 0 0 3.164 1.006 17.33 17.33 0 0 0 3.416.36c1.81 0 3.22-.302 4.208-.907.99-.604 1.497-1.484 1.497-2.6 0-.77-.242-1.407-.728-1.934-.485-.527-1.4-1.006-2.72-1.446l-3.91-1.208c-1.966-.615-3.425-1.516-4.325-2.697-.9-1.162-1.36-2.46-1.36-3.858 0-1.115.242-2.1.727-2.956a7.135 7.135 0 0 1 1.953-2.178c.817-.603 1.732-1.055 2.778-1.368a12.053 12.053 0 0 1 3.435-.468c.602 0 1.225.04 1.864.117.621.078 1.205.185 1.77.312.545.146 1.07.302 1.574.478.504.175.893.35 1.168.526.37.224.64.449.795.693.155.224.233.517.233.87v1.427c0 .624-.234.946-.68.946-.242 0-.622-.117-1.13-.35a15.16 15.16 0 0 0-5.688-1.115c-1.634 0-2.924.244-3.825.753-.9.508-1.361 1.29-1.361 2.392 0 .77.262 1.427.786 1.953.524.527 1.497 1.055 2.894 1.534l3.825 1.207c1.94.615 3.346 1.476 4.188 2.58.843 1.103 1.254 2.362 1.254 3.74 0 1.135-.232 2.17-.698 3.087a7.3 7.3 0 0 1-1.98 2.393c-.854.673-1.867 1.18-3.056 1.514-1.225.36-2.527.545-3.942.545z" fill="#252F3E" />
      <path d="M68.934 55.96c-8.527 6.302-20.89 9.651-31.533 9.651-14.916 0-28.356-5.512-38.508-14.688-.798-.722-.084-1.71.874-1.143 10.972 6.38 24.53 10.222 38.547 10.222 9.452 0 19.843-1.953 29.412-6.008 1.444-.614 2.652.946 1.208 1.966z" fill="#FF9900" />
      <path d="M72.398 52.019c-1.088-1.397-7.21-.662-9.959-.332-.835.098-963-.488-.185-2.08 4.873-3.428 12.87-2.44 13.8-1.29.931 1.163-.247 9.184-4.824 13.017-.7.585-1.37.273-1.059-.503.826-2.554 3.314-7.417 2.227-8.812z" fill="#FF9900" />
    </svg>
  );
}

/* ─── Animation helpers ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as any } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* Scroll-triggered section wrapper */
function FadeSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Background Decoration ────────────────────────────────────────────── */
function BackgroundDecor() {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Primary blob */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 60, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Secondary blob */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsl(4 82% 57% / 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      {/* Accent blob */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          top: '40%',
          right: '-10%',
          width: '35vw',
          height: '35vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsl(134 61% 41% / 0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const experiences = [
  {
    role: 'Associate, Data Scientist',
    company: 'Kyndryl Malaysia',
    period: 'June 2025 – Present',
    desc: 'Applying advanced data science methodologies to deliver AI-powered solutions. Solving complex enterprise challenges using machine learning and GenAI technologies.',
    tags: ['GenAI', 'Machine Learning', 'LLM'],
    current: true,
    color: 'hsl(4 82% 57%)', // Red
  },
  {
    role: 'Industrial Trainee (AI & Data)',
    company: 'EY Technology Consulting',
    period: 'October 2024 – January 2025',
    desc: 'Gained practical experience in AI and data consulting. Contributed to enterprise technology implementation projects for major clients across various industries.',
    tags: ['AI Consulting', 'Data Analysis', 'NLP'],
    current: false,
    color: 'hsl(45 97% 52%)', // Yellow
  },
];

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'hsl(217 89% 61%)',
    bg: 'hsl(217 89% 61% / 0.1)',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    color: 'hsl(45 97% 52%)',
    bg: 'hsl(45 97% 52% / 0.1)',
    skills: ['Azure', 'GCP', 'AWS', 'Git', 'Power BI', 'Docker'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    color: 'hsl(134 61% 41%)',
    bg: 'hsl(134 61% 41% / 0.1)',
    skills: ['React JS', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'hsl(4 82% 57%)',
    bg: 'hsl(4 82% 57% / 0.1)',
    skills: ['NLP', 'Machine Learning', 'Transformer Models', 'RAG', 'GenAI', 'Prompt Engineering'],
  },

];

/* ─── Skill Color Mapping ───────────────────────────────────────────────── */
const getSkillColor = (skill: string) => {
  // Map all skills from skillGroups
  const skillColorMap: Record<string, { color: string; bg: string }> = {};
  skillGroups.forEach((group) => {
    group.skills.forEach((s) => {
      skillColorMap[s] = { color: group.color, bg: group.bg };
    });
  });

  // Additional project-specific tags mapping to skill categories
  const projectTagMapping: Record<string, string> = {
    'Vertex AI': 'Cloud & Tools',
    'LangGraph': 'Frameworks & Libraries',
    'Gemini 2.5 Flash': 'AI & Machine Learning',
    'GCS': 'Cloud & Tools',
    'RAG': 'AI & Machine Learning',
    'Azure OpenAI': 'Cloud & Tools',
    'GPT-4o-mini': 'AI & Machine Learning',
    'Legal AI': 'AI & Machine Learning',
    'Agentic Workflow': 'AI & Machine Learning',
    'BM25': 'AI & Machine Learning',
    'Vector Search': 'AI & Machine Learning',
    'Banking': 'Programming',
    'Azure Document Intelligence': 'Cloud & Tools',
    'Cloud Run': 'Cloud & Tools',
    'LLM': 'AI & Machine Learning',
    'Document AI': 'AI & Machine Learning',
    'Text-to-SQL': 'Programming',
    'PostgreSQL': 'Programming',
    'Few-shot': 'AI & Machine Learning',
    'Random Forest': 'AI & Machine Learning',
    'Logistic Regression': 'AI & Machine Learning',
    'ML': 'AI & Machine Learning',
    'GenAI': 'AI & Machine Learning',
    'Machine Learning': 'AI & Machine Learning',
  };

  // Check if skill exists in skillColorMap
  if (skillColorMap[skill]) {
    return skillColorMap[skill];
  }

  // Check if project tag has a category mapping
  if (projectTagMapping[skill]) {
    const category = projectTagMapping[skill];
    const skillGroup = skillGroups.find((g) => g.title === category);
    if (skillGroup) {
      return { color: skillGroup.color, bg: skillGroup.bg };
    }
  }

  // Default fallback
  return { color: 'hsl(217 91% 65%)', bg: 'hsl(217 91% 65% / 0.1)' };
};

const projects = [
  {
    title: 'Agentic Booking System & Retrieval Pipeline',
    desc: 'Streamlined and automated internal booking processes by developing an agentic framework. Integrated Vertex AI and LangGraph to manage complex stateful multi-step agent workflows. Built a custom pipeline for real-time booking data retrieval using Gemini 2.5 Flash with blended search on Google Cloud Storage and website for orchestrating booking system operations (availability checking, quotation generation, contract generation), integrated with Vertex AI Search.',
    tags: ['Vertex AI', 'LangGraph', 'Gemini 2.5 Flash', 'GCS', 'RAG'],
  },
  {
    title: 'AI-Powered Contract Compliance Tool',
    desc: 'Developed an AI tool to automate the legal review process for contracts. Implemented an automated workflow using Azure AI services with GPT-4o-mini on Azure OpenAI. Evaluates legal contracts to identify non-compliant clauses and highlight potential regulatory risks based on predefined legal clauses and aspects, generating comprehensive summaries.',
    tags: ['Azure OpenAI', 'GPT-4o-mini', 'Legal AI'],
  },
  {
    title: 'RAG-Based Banking Support System',
    desc: 'Created a system for a banking application to provide real-time, context-aware resolutions to user queries. Leveraged Retrieval-Augmented Generation combined with hybrid searching using BM25 and vector search powered by Azure OpenAI. Improved query resolution accuracy by grounding the LLM in specific banking documentation through semantic search and vector indexing.',
    tags: ['BM25', 'Vector Search', 'Azure OpenAI', 'RAG'],
  },
  {
    title: 'Document Validation Pipeline',
    desc: 'Automated document verification for loan applications to detect discrepancies against compliance data. Developed a pipeline using Azure Document Intelligence to extract key information and perform cross-validation ensuring all fields are aligned. Workflow triggered through Google Cloud Run function to send summarized results and suggested remediation actions using LLM to data users.',
    tags: ['Azure Document Intelligence', 'Cloud Run', 'LLM'],
  },
  {
    title: 'AI SQL Agent (Text-to-SQL)',
    desc: 'Enhanced structured data extraction by allowing users to query databases using natural language. Developed a POC using NLP text-to-SQL techniques with LLM to understand human natural language text and convert to SQL queries to retrieve relevant data from Postgres. Implemented few-shot prompting to improve performance and accuracy.',
    tags: ['NLP', 'Text-to-SQL', 'PostgreSQL', 'LLM', 'Few-shot'],
  },
  {
    title: 'Predictive Risk Assessment for Credit Scoring (Coursework)',
    desc: 'Developed a machine learning classification model to automate the prediction of credit scores. Applied Random Forest and Logistic Regression algorithms with comprehensive model evaluation using AUC-ROC and F1 Score metrics. Implemented using Python, Scikit-Learn, Matplotlib, and PowerBI for risk assessment and visualization.',
    tags: ['Random Forest', 'Logistic Regression', 'Scikit-Learn', 'PowerBI', 'ML'],
  },
];

const certGroups = [
  {
    provider: 'Microsoft Azure',
    icon: AzureIcon,
    accent: '#0078D4',
    certs: [
      { name: 'Azure AI Engineer Associate', credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-gb/OwenChin-2251/A60AAABE277FA961?sharingId=AEF00A621B18974C' },
      { name: 'Azure Fundamentals', credentialUrl: '' },
      { name: 'Azure Data Fundamentals', credentialUrl: '' },
      { name: 'Azure AI Fundamentals', credentialUrl: '' },
    ],
  },
  {
    provider: 'Google Cloud',
    icon: GcpIcon,
    accent: '#ea4335',
    certs: [
      { name: 'Professional Cloud Architect', credentialUrl: 'https://www.credly.com/badges/b17169ba-3fba-48ff-b333-cf99b7bfaa6c/linked_in_profile' }
    ],
  },
  {
    provider: 'AWS',
    icon: AwsIcon,
    accent: '#FF9900',
    certs: [
      { name: 'Machine Learning Engineer – Associate', credentialUrl: 'https://www.credly.com/badges/b96b3109-0a9a-460b-88a4-882bb38c21a1/linked_in_profile' }
    ],
  },
];

/* ─── Clustering Algorithm & Visualization ─────────────────────────────────── */
interface Point {
  x: number;
  y: number;
  cluster?: number;
}

interface Centroid {
  x: number;
  y: number;
  cluster: number;
}

interface ClusteringState {
  points: Point[];
  centroids: Centroid[];
  iteration: number;
}

function kMeansClusteringSteps(
  points: Point[],
  k: number,
  maxIterations: number = 20
): ClusteringState[] {
  if (k <= 0 || k > points.length) {
    return [{ points, centroids: [], iteration: 0 }];
  }

  const states: ClusteringState[] = [];

  // Initialize centroids randomly
  let centroids: Centroid[] = [];
  const usedIndices = new Set<number>();
  for (let i = 0; i < k; i++) {
    let randomIdx;
    do {
      randomIdx = Math.floor(Math.random() * points.length);
    } while (usedIndices.has(randomIdx));
    usedIndices.add(randomIdx);

    const p = points[randomIdx];
    centroids.push({ x: p.x, y: p.y, cluster: i });
  }

  let currentPoints = [...points];

  // Add initial state with no cluster assignments
  states.push({
    points: points.map((p) => ({ ...p, cluster: undefined })),
    centroids: centroids.map((c) => ({ ...c })),
    iteration: 0,
  });

  for (let iter = 0; iter < maxIterations; iter++) {
    // Assign points to nearest centroid
    currentPoints = currentPoints.map((p) => {
      let minDist = Infinity;
      let closestCluster = 0;

      for (let i = 0; i < centroids.length; i++) {
        const dist = Math.sqrt(
          (p.x - centroids[i].x) ** 2 + (p.y - centroids[i].y) ** 2
        );
        if (dist < minDist) {
          minDist = dist;
          closestCluster = i;
        }
      }

      return { ...p, cluster: closestCluster };
    });

    states.push({
      points: [...currentPoints],
      centroids: centroids.map((c) => ({ ...c })),
      iteration: iter + 1,
    });

    // Calculate new centroids
    const newCentroids: Centroid[] = [];
    for (let i = 0; i < k; i++) {
      const clusterPoints = currentPoints.filter((p) => p.cluster === i);
      if (clusterPoints.length > 0) {
        const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
        const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
        newCentroids.push({ x: avgX, y: avgY, cluster: i });
      } else {
        newCentroids.push(centroids[i]);
      }
    }

    // Check convergence
    let converged = true;
    for (let i = 0; i < centroids.length; i++) {
      const threshold = 0.1;
      if (
        Math.abs(centroids[i].x - newCentroids[i].x) >= threshold ||
        Math.abs(centroids[i].y - newCentroids[i].y) >= threshold
      ) {
        converged = false;
        break;
      }
    }

    centroids = newCentroids;

    if (converged) break;
  }

  return states.length > 0 ? states : [{ points: currentPoints, centroids, iteration: 0 }];
}

const clusterColors = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
  '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#06b6d4',
];

// Helper to interpolate between two hex colors for a smoother transition
const interpolateHex = (hex1: string, hex2: string, factor: number): string => {
  const r1 = parseInt(hex1.substring(1, 3), 16);
  const g1 = parseInt(hex1.substring(3, 5), 16);
  const b1 = parseInt(hex1.substring(5, 7), 16);

  const r2 = parseInt(hex2.substring(1, 3), 16);
  const g2 = parseInt(hex2.substring(3, 5), 16);
  const b2 = parseInt(hex2.substring(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  const toHex = (c: number) => c.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

function ClusteringGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [k, setK] = useState(4);
  const [numPoints, setNumPoints] = useState(60);
  const [maxIter, setMaxIter] = useState(15);
  const [points, setPoints] = useState<Point[]>([]);
  const [states, setStates] = useState<ClusteringState[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVoronoi, setShowVoronoi] = useState(true);

  // Generate random points
  const generatePoints = (pCount?: number, kVal?: number) => {
    const count = pCount ?? numPoints;
    const kv = kVal ?? k;

    const CANVAS_WIDTH = 1000;
    const CANVAS_HEIGHT = 400;
    const POINT_RADIUS = 3;
    const PADDING = POINT_RADIUS + 5;

    const newPoints: Point[] = [];
    // More structured random generation (clusters)
    const centers = Array.from({ length: 5 }, () => ({
      x: Math.random() * CANVAS_WIDTH,
      y: Math.random() * CANVAS_HEIGHT,
    }));

    for (let i = 0; i < count; i++) {
      const center = centers[Math.floor(Math.random() * centers.length)];
      newPoints.push({
        x: Math.max(PADDING, Math.min(CANVAS_WIDTH - PADDING, center.x + (Math.random() - 0.5) * 200)),
        y: Math.max(PADDING, Math.min(CANVAS_HEIGHT - PADDING, center.y + (Math.random() - 0.5) * 150)),
      });
    }
    setPoints(newPoints);

    const clusteringStates = kMeansClusteringSteps(newPoints, kv, maxIter);
    setStates(clusteringStates);
    setCurrentFrame(0);
  };

  const computeStates = (pSource: Point[]) => {
    const clusteringStates = kMeansClusteringSteps(pSource, k, maxIter);
    setStates(clusteringStates);
    setCurrentFrame(0);
  };


  // Re-run clustering if maxIter changes without changing points
  useEffect(() => {
    if (points.length > 0) {
      const clusteringStates = kMeansClusteringSteps(points, k, maxIter);
      setStates(clusteringStates);
      setCurrentFrame(0);
    }
  }, [maxIter]);

  // Initial generation
  useEffect(() => {
    generatePoints();
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || states.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentFrame((f) => {
        if (f >= states.length - 1) {
          setIsPlaying(false);
          return f;
        }
        return f + 1;
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [currentFrame, isPlaying, states.length]);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || states.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Subtle Grid
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i <= canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    const state = states[currentFrame];
    if (!state) return;

    const baseGrey = '#94a3b8'; // Matching muted foreground aesthetic
    const progressFactor = states.length > 1 ? currentFrame / (states.length - 1) : 1;

    // Optional: Draw regions (Voronoi-ish)
    if (showVoronoi) {
      // Simplified Voronoi by scanning a low-res grid
      const gridSize = 10;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          let minDist = Infinity;
          let closestCluster = 0;
          state.centroids.forEach((c) => {
            const dist = Math.sqrt((x - c.x) ** 2 + (y - c.y) ** 2);
            if (dist < minDist) {
              minDist = dist;
              closestCluster = c.cluster;
            }
          });
          const alpha = Math.round(17 * progressFactor).toString(16).padStart(2, '0');
          ctx.fillStyle = `${clusterColors[closestCluster % clusterColors.length]}${alpha}`;
          ctx.fillRect(x, y, gridSize, gridSize);
        }
      }
    }

    // Draw points
    state.points.forEach((p) => {
      let color = baseGrey;
      if (p.cluster !== undefined) {
        const targetColor = clusterColors[p.cluster % clusterColors.length];
        color = interpolateHex(baseGrey, targetColor, progressFactor);
      }

      ctx.fillStyle = color;

      // Glow effect for points assigned to clusters
      if (p.cluster !== undefined) {
        ctx.shadowBlur = 4 * progressFactor;
        ctx.shadowColor = color;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();

      // Reset shadow
      ctx.shadowBlur = 0;
    });

    // Draw centroids
    state.centroids.forEach((c) => {
      const color = clusterColors[c.cluster % clusterColors.length];

      // Outer ring
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(c.x, c.y, 14, 0, Math.PI * 2);
      ctx.stroke();

      // Pulsing effect
      const pulseScale = 1 + Math.sin(Date.now() / 200) * 0.1;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(c.x, c.y, 8 * pulseScale, 0, Math.PI * 2);
      ctx.fill();

      // White dot in center
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(c.x, c.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // If animating, keep re-drawing the pulse
    if (state.centroids.length > 0) {
      const animationReq = requestAnimationFrame(() => {
        // No-op purely to trigger re-render for pulsing
        // Actually, better to use a dedicated pulse state or just useEffect dependency
      });
      // To simplify, we'll only pulse if currentFrame isn't changing too fast
      // or just accept it's static if not playing.
    }
  }, [states, currentFrame, showVoronoi]);

  const togglePlay = () => {
    if (currentFrame >= states.length - 1) {
      setCurrentFrame(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.75rem', background: 'hsl(var(--muted) / 0.2)', marginBottom: '1.5rem' }}>
          <canvas
            ref={canvasRef}
            width={1000}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{
              background: 'hsl(var(--background) / 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '0.5rem 0.8rem',
              borderRadius: '99px',
              border: '1px solid hsl(var(--border))',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: isPlaying ? '#f59e0b' : '#10b981' }} />
              {isPlaying ? 'Animating' : (currentFrame === states.length - 1 ? 'Converged' : 'Paused')}
            </div>
          </div>

          {points.length === 0 && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Click to add points or generate random ones</p>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--muted-foreground))' }}>Number of clusters (k)</label>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{k}</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                value={k}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setK(val);
                  generatePoints(numPoints, val);
                }}
                style={{ width: '100%', accentColor: 'hsl(var(--primary))' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--muted-foreground))' }}>Points count</label>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{points.length}</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={numPoints}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setNumPoints(val);
                  generatePoints(val, k);
                }}
                style={{ width: '100%', accentColor: 'hsl(var(--primary))' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', justifyContent: 'center' }}>
            <button
              onClick={togglePlay}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.9rem',
                background: isPlaying ? 'hsl(var(--muted))' : 'hsl(var(--primary))',
                color: isPlaying ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))',
                border: 'none',
                borderRadius: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isPlaying ? 'none' : '0 4px 12px hsl(var(--primary) / 0.15)',
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              {isPlaying ? 'Pause' : 'Start Simulation'}
            </button>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', margin: 0, fontWeight: 500 }}>
              Adjust sliders to reset data
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          background: 'hsl(var(--muted) / 0.15)',
          borderRadius: '0.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>
              Step <span style={{ fontWeight: 700, color: 'hsl(var(--foreground))' }}>{currentFrame + 1}</span> of {states.length}
            </div>
            <div style={{ width: '100px', height: '4px', background: 'hsl(var(--border))', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                width: `${((currentFrame + 1) / states.length) * 100}%`,
                height: '100%',
                background: 'hsl(var(--primary))',
                transition: 'width 0.3s ease-out'
              }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>
              <input
                type="checkbox"
                checked={showVoronoi}
                onChange={(e) => setShowVoronoi(e.target.checked)}
                style={{ accentColor: 'hsl(var(--primary))' }}
              />
              Show Influence Regions
            </label>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', padding: '0 0.5rem' }}>
        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
          <strong>How it works:</strong> Adjust the sliders to generate points. Click <em>Start Simulation</em> and watch the <strong>K-Means</strong> algorithm iteratively refine cluster centroids until it converges. The regions show the mathematical decision boundaries for each cluster.
        </p>
      </div>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [displayGradientText, setDisplayGradientText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Hi, I'm Owen!";
  const gradientText = "Data Scientist | AI Engineer <br>";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let charIndex = 0;
    let gradientIndex = 0;
    let isTypingFirstText = true;

    const typeInterval = setInterval(() => {
      if (isTypingFirstText) {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          isTypingFirstText = false;
          // Small delay before starting the gradient text
          setTimeout(() => {
            typeInterval; // Keep interval running for gradient text
          }, 200);
        }
      } else {
        if (gradientIndex < gradientText.length) {
          setDisplayGradientText(gradientText.slice(0, gradientIndex + 1));
          gradientIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typeInterval);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Try It Out', href: '#clustering-game' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative" id="top">
      <BackgroundDecor />

      {/* ── Navbar ────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s',
          backgroundColor: scrolled ? 'hsl(var(--background) / 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(var(--border))' : '1px solid transparent',
        }}
      >
        <div className="container mx-auto px-6 md:px-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px',marginTop: '0.4rem'}}>
          <a
            href="#"
            onClick={(e) => scrollTo(e, '#top')}
            style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'hsl(var(--foreground))', transition: 'color 0.2s' }}
          >
            Owen Chin
          </a>
          <div style={{ display: 'flex', gap: '2rem' }} className="hidden md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'hsl(var(--muted-foreground))', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '6rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{}}
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '9999px', border: '1px solid hsl(var(--primary) / 0.4)', background: 'hsl(var(--primary) / 0.08)', marginBottom: '1.5rem' }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'hsl(160 65% 55%)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'hsl(var(--primary))' }}>Data Scientist & AI Engineer</span>
            </motion.div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: 'hsl(var(--foreground))' }}>
              {displayText}
              {displayText.length > 0 && displayText.length < fullText.length && <span style={{ animation: 'blink 0.7s infinite', marginLeft: '0.1em' }}>|</span>}
              {displayText === fullText && <><br />{' '}</>}
              {displayText === fullText && (
                <span style={{ background: 'linear-gradient(135deg,hsl(217 89% 61%), /* blue */hsl(134 61% 41%), /* green */hsl(45 97% 52%),  /* yellow */hsl(4 82% 57%)    /* red */)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {displayGradientText}
                  {displayGradientText.length > 0 && displayGradientText.length < gradientText.length && <span style={{ animation: 'blink 0.7s infinite', marginLeft: '0.1em' }}>|</span>}
                </span>
              )}
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', lineHeight: 1.7, fontWeight: 400 }}>
              Specialized in machine learning and AI-powered applications. Currently building intelligent solutions that make a difference.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="#projects"
                onClick={(e) => scrollTo(e, '#projects')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1.75rem', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', borderRadius: '9999px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'opacity 0.2s, gap 0.2s', border: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                View My Projects <ArrowRight size={16} />
              </a>
              <a
                href="mailto:owenchin123456@gmail.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1.75rem', background: 'transparent', color: 'hsl(var(--foreground))', borderRadius: '9999px', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid hsl(var(--border))', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(var(--border))'; }}
              >
                <Mail size={16} /> Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>About</h2>
            <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', maxWidth: '36rem' }}>A little about who I am, where I come from, and what drives me.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '3rem' }}>
              <div style={{ fontSize: '1.05rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  I'm a Data Scientist and AI Engineer passionate about building intelligent systems. Recently graduated from University Tunku Abdul Rahman (UTAR).
                </p>
                <p>
                  My expertise lies in Natural Language Processing, Large Language Models, and Retrieval-Augmented Generation (RAG) systems. I currently work as an Associate Data Scientist, solving complex business challenges with AI.
                </p>
                <p>
                  When I'm not building AI solutions, I enjoy exploring emerging technologies and keeping up with the latest advancements in AI and machine learning.                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: MapPin, label: 'LOCATION', value: 'Malaysia' },
                  { icon: Mail, label: 'EMAIL', value: 'owenchin123456@gmail.com', href: 'mailto:owenchin123456@gmail.com' },
                  { icon: Linkedin, label: 'LINKEDIN', value: 'Owen Chin', href: 'https://www.linkedin.com/in/owen-chin-a93735267/' },
                  { icon: GraduationCap, label: 'EDUCATION', value: 'UTAR - Bachelor of Information Systems (Hons) Digital Economy Technology (CGPA 3.88)' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'hsl(var(--primary) / 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={17} color="hsl(var(--primary))" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: 'hsl(var(--primary))', marginBottom: '0.2rem' }}>{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: 'hsl(var(--foreground))', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--primary))')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--foreground))')}>
                          {value}
                        </a>
                      ) : (
                        <p style={{ color: 'hsl(var(--foreground))', fontSize: '0.95rem' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Experience (Vertical Timeline) ──────────────────────────────── */}
      <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Experiences</h2>
            <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3.5rem', maxWidth: '36rem' }}>My professional journey so far — latest first.</p>

            <div style={{ position: 'relative', }}>
              {/* Vertical timeline line */}
              <div className="timeline-line" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {experiences.map((exp, i) => (
                  <FadeSection key={i} delay={i * 0.12}>
                    <div className="timeline-entry" style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: i < experiences.length - 1 ? '3rem' : '0' }}>
                      {/* Dot */}
                      <div
                        className={`timeline-dot ${exp.current ? 'timeline-dot--current' : ''}`}
                      />

                      {/* Period label */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <Calendar size={13} color="hsl(var(--muted-foreground))" />
                        <span style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500, letterSpacing: '0.02em' }}>{exp.period}</span>
                        {exp.current && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.15rem 0.6rem', borderRadius: '9999px', background: 'hsl(160 65% 55% / 0.15)', color: 'hsl(160 65% 45%)', fontSize: '0.7rem', fontWeight: 600 }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'hsl(160 65% 55%)', animation: 'pulse 2s infinite' }} />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Card */}
                      <div style={{
                        background: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '1rem',
                        padding: '1.5rem 1.75rem',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--primary) / 0.45)';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px hsl(var(--primary) / 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      >
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'hsl(var(--foreground))', marginBottom: '0.25rem' }}>{exp.role}</h3>
                        {/* <p style={{ fontSize: '0.95rem', fontWeight: 600, color: (exp as any).color || 'hsl(var(--primary))', marginBottom: '0.75rem' }}>{exp.company}</p> */}
                        <p style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>{exp.company}</p>
                        <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {exp.tags.map((t) => (
                            <span key={t} style={{ padding: '0.2rem 0.65rem', borderRadius: '9999px', background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', fontSize: '0.75rem', fontWeight: 500 }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeSection>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Skills</h2>
            <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3.5rem', maxWidth: '36rem' }}>Technologies and tools I work with daily.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', }} className="skills-grid">
              {skillGroups.map((group, i) => (
                <FadeSection key={i} delay={i * 0.08}>
                  <div
                    className="skill-card"
                    style={{
                      background: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      transition: 'border-color 0.3s, box-shadow 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = group.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${group.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: group.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <group.icon size={20} color={group.color} />
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>{group.title}</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-tag"
                          style={{
                            background: group.bg,
                            color: group.color,
                            border: `1px solid transparent`,
                            borderRadius: '0.375rem',
                            padding: '0.35rem 0.65rem',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'border-color 0.3s, box-shadow 0.3s',
                            cursor: 'default'
                          }}
                        // onMouseEnter={(e) => {
                        //   (e.currentTarget as HTMLElement).style.borderColor = group.color;
                        //   (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${group.color}40, inset 0 0 12px ${group.color}20`;
                        // }}
                        // onMouseLeave={(e) => {
                        //   (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                        //   (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        // }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Featured Work + Certifications ──────────────────────────────── */}
      <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Featured Work</h2>
            <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3.5rem', maxWidth: '36rem' }}>Projects that showcase my expertise in AI, NLP, and cloud technologies.</p>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="projects-grid">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '1rem',
                    padding: '1.75rem',
                    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  whileHover={{ y: -3, boxShadow: '0 8px 32px hsl(var(--primary) / 0.1)', borderColor: 'hsl(var(--primary) / 0.4)' } as never}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--primary))', letterSpacing: '0.06em', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'hsl(var(--primary) / 0.08)' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'hsl(var(--foreground))', marginBottom: '0.6rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tags.map((t) => {
                      // const { color, bg } = getSkillColor(t);
                      const { color, bg } = { color: '', bg: 'hsl(var(--secondary) / 0.12)' };
                      return (
                        <span key={t} style={{ padding: '0.22rem 0.7rem', borderRadius: '9999px', background: bg, color: color, fontSize: '0.72rem', fontWeight: 500 }}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </FadeSection>


        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────────────── */}
      <section id="certifications" style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Certifications</h2>
            <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3.5rem', }}>Industry-recognized credentials across major cloud platforms.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certGroups.map((group, i) => (
                <FadeSection key={i} delay={i * 0.1}>
                  <div style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '1rem',
                    padding: '1.5rem 1.75rem',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${group.accent}66`; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${group.accent}14`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${group.accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <group.icon size={22} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>{group.provider}</h4>
                        <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{group.certs.length} certification{group.certs.length > 1 ? 's' : ''}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {group.certs.map((cert) => {
                        const certName = typeof cert === 'string' ? cert : cert.name;
                        const credentialUrl = typeof cert === 'string' ? null : cert.credentialUrl;
                        return credentialUrl ? (
                          <a key={certName} href={credentialUrl} target="_blank" rel="noopener noreferrer" style={{
                            padding: '0.5rem 0.85rem',
                            borderRadius: '0.5rem',
                            background: 'hsl(var(--background))',
                            border: '1px solid hsl(var(--border))',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.83rem',
                            color: 'hsl(var(--foreground))',
                            transition: 'all 0.2s',
                            textDecoration: 'none',
                            cursor: 'pointer',
                          }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = group.accent; (e.currentTarget as HTMLElement).style.background = `${group.accent}0a`; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))'; (e.currentTarget as HTMLElement).style.background = 'hsl(var(--background))'; }}>
                            <Award size={13} color={group.accent} />
                            {certName}
                          </a>
                        ) : (
                          <div key={certName} style={{
                            padding: '0.5rem 0.85rem',
                            borderRadius: '0.5rem',
                            background: 'hsl(var(--background))',
                            border: '1px solid hsl(var(--border))',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.83rem',
                            color: 'hsl(var(--foreground))',
                          }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = group.accent; (e.currentTarget as HTMLElement).style.background = `${group.accent}0a`; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))'; (e.currentTarget as HTMLElement).style.background = 'hsl(var(--background))'; }}>

                            <Award size={13} color={group.accent} />
                            {certName}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Clustering Game ───────────────────────────────────────────── */}
      <section id="clustering-game" style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>
              Try It Out !!!
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3.5rem', lineHeight: 1.7 }}>
              Experience machine learning in action. Adjust the <strong>Number of clusters</strong> or <strong>Points count</strong> to automatically generate new patterns and watch how the K-Means algorithm identifies clusters in real-time.
            </p>
            <ClusteringGame />
          </FadeSection>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: '6rem 0 4rem', position: 'relative' }}>
        <div className="container mx-auto px-6 md:px-12">
          <FadeSection>
            <div style={{}}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>
                Let&apos;s Connect
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', lineHeight: 1.75, width: '100%' }}>
                I'm always open to new opportunities and conversations about AI and data science. Feel free to reach out through any of the channels below.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="mailto:owenchin123456@gmail.com" className="contact-card">
                  <Mail size={18} /> owenchin123456@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/owen-chin-a93735267/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>

                <a
                  href="https://wa.me/601121722296"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <Phone size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid hsl(var(--border))', textAlign: 'center' }}>
        <div className="container mx-auto px-6">
          <p style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>
            Designed & Built by Owen Chin · {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}