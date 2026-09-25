// Performance monitoring utilities

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export const PERFORMANCE_THRESHOLDS = {
  good: {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800,
  },
  needsImprovement: {
    fcp: 3000,
    lcp: 4000,
    fid: 300,
    cls: 0.25,
    ttfb: 1800,
  },
};

export function getPerformanceRating(
  metric: keyof PerformanceMetrics,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  if (value <= PERFORMANCE_THRESHOLDS.good[metric]) {
    return 'good';
  }
  if (value <= PERFORMANCE_THRESHOLDS.needsImprovement[metric]) {
    return 'needs-improvement';
  }
  return 'poor';
}

export function formatPerformanceValue(
  metric: keyof PerformanceMetrics,
  value: number
): string {
  if (metric === 'cls') {
    return value.toFixed(3);
  }
  return `${Math.round(value)}ms`;
}

export function logPerformanceMetrics(metrics: PerformanceMetrics) {
  console.group('📊 Performance Metrics');
  
  Object.entries(metrics).forEach(([key, value]) => {
    const metric = key as keyof PerformanceMetrics;
    const rating = getPerformanceRating(metric, value);
    const formattedValue = formatPerformanceValue(metric, value);
    
    const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
    console.log(`${emoji} ${metric.toUpperCase()}: ${formattedValue} (${rating})`);
  });
  
  console.groupEnd();
}

export function setupPerformanceObserver() {
  if (typeof window === 'undefined') return;

  // Performance Observer for Web Vitals
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Entry:', entry);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
    } catch (e) {
      console.warn('Performance Observer not supported', e);
    }
  }
}

export function measurePageLoad() {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!navigation) return null;

  return {
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    ttfb: navigation.responseStart - navigation.requestStart,
    download: navigation.responseEnd - navigation.responseStart,
    domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
    totalLoad: navigation.loadEventEnd - navigation.startTime,
  };
}