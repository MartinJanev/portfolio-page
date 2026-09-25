import type { ResearchItem } from "../../types/content";

/**
 * TODO(Martin): `year` and `venue` are intentionally absent — I did not want to
 * invent publication dates or venues. Fill them in and the rows will render
 * them beside the status automatically. Same for `paperLink` (PDF/DOI).
 */
export const research: ResearchItem[] = [
  {
    title:
      "Comparison of MI-based and Classical Feature Selection Methods in ML processes",
    subtitle: "Information Theory in Machine Learning",
    description:
      "Empirical comparison of MI-based and classical feature selection methods on large-scale tabular datasets using logistic regression and gradient boosting. Evaluated performance, stability, and computational cost, showing MI-based methods are competitive but offer no systematic advantages over classical baselines.",
    techs: ["Python", "PyTorch", "CUDA", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/MartinJanev/MI-FS-Paper",
    status: "Student Paper",
  },
  {
    title: "Spiking Neural Networks for Formal Language Processing",
    subtitle: "Neural Networks and Formal Languages",
    description:
      "Exploring the application of spiking neural networks in formal language recognition tasks. We compare the performance of spiking neural networks with traditional recurrent neural networks on various formal language benchmarks, analyzing their capabilities in terms of learning efficiency, generalization, and computational requirements.",
    techs: [
      "Neural Networks",
      "Formal Languages",
      "Python",
      "PyTorch",
      "NumPy",
    ],
    link: "https://github.com/MartinJanev/SNN",
    status: "Standard Paper",
  },
  {
    title:
      "Bayesian Linear Regression with MCMC method in Parkinson's Telemonitoring",
    subtitle: "Probabilistic Modeling with Markov Chain",
    description:
      "Applied Bayesian linear regression using Markov Chain Monte Carlo (MCMC) to analyze and predict telemonitoring data in Parkinson's disease. The project demonstrates uncertainty quantification and parameter inference for clinical time-series data.",
    techs: ["Python", "MCMC", "Bayesian Statistics", "NumPyro"],
    link: "https://github.com/MartinJanev/MC_Regression",
  },
  {
    title:
      "Parallel Fraud Detection with Large-Scale Financial Relationship Graphs",
    subtitle: "Parallel Graph Processing",
    description:
      "This research explores the application of concurrent graph processing techniques to enhance fraud detection in large-scale financial relationship graphs. It proposes a novel approach leveraging distributed computing frameworks to efficiently analyze complex financial networks, identify suspicious patterns, and improve the accuracy of fraud detection algorithms.",
    techs: [
      "Graph Theory",
      "Concurrent Computing",
      "Python",
      "NetworkX",
      "Joblib",
      "Numba",
    ],
    link: "https://github.com/MartinJanev/FraudDetection",
  },
];
