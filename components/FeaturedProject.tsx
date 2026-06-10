import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, AlertCircle, Play, RefreshCw, Layers, CheckCircle, ExternalLink, Activity } from 'lucide-react';

interface MetricState {
  sysLoad: number;
  p99Latency: number;
  errRate: number;
  status: 'OPTIMAL' | 'DEGRADED' | 'ALERT';
}

const FeaturedProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'terminal' | 'metrics'>('metrics');
  const [simulationState, setSimulationState] = useState<MetricState>({
    sysLoad: 0.24,
    p99Latency: 12.4,
    errRate: 0.00,
    status: 'OPTIMAL'
  });
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[2026-03-16 11:42:01] INFO  - sentinel-pulse-daemon starting up...",
    "[2026-03-16 11:42:02] INFO  - Loaded threshold configuration. Limit p99: 15.0ms",
    "[2026-03-16 11:42:02] INFO  - Docker environment verified. container_id=noc-sre-881a2",
    "[2026-03-16 11:42:03] PASS  - PostgreSQL master connection ping in 2.1ms",
    "[2026-03-16 11:42:04] MONITORING - polling distributed services..."
  ]);
  const [isAlertActive, setIsAlertActive] = useState(false);

  // Simulation loop for live visual next-gen feedback
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationState(prev => {
        // Normal random walks
        let loadRatio = prev.sysLoad + (Math.random() - 0.5) * 0.04;
        let latencyScale = prev.p99Latency + (Math.random() - 0.5) * 1.2;
        let err = prev.errRate;

        // Clip values
        loadRatio = Math.max(0.05, Math.min(loadRatio, 0.95));
        latencyScale = Math.max(5.0, Math.min(latencyScale, 45.0));

        // State evaluation
        let status: 'OPTIMAL' | 'DEGRADED' | 'ALERT' = 'OPTIMAL';
        if (latencyScale > 28 || loadRatio > 0.75 || err > 1.5) {
          status = 'ALERT';
        } else if (latencyScale > 18 || loadRatio > 0.55) {
          status = 'DEGRADED';
        }

        return {
          sysLoad: parseFloat(loadRatio.toFixed(2)),
          p99Latency: parseFloat(latencyScale.toFixed(1)),
          errRate: parseFloat(err.toFixed(2)),
          status
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle triggering a simulated anomaly
  const triggerSimulatedAnomaly = () => {
    setIsAlertActive(true);
    setSimulationState({
      sysLoad: 0.88,
      p99Latency: 34.5,
      errRate: 4.12,
      status: 'ALERT'
    });

    const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
    setTerminalLogs(prev => [
      `[${timestamp}] CRITICAL - p99 latency threshold breached: 34.5ms > 15.0ms`,
      `[${timestamp}] ANOMALY  - High system load detected, CPU utilization 88%`,
      `[${timestamp}] TRIGGER  - Initiated threshold-alerting. Alert dispatched to PagerDuty`,
      `[${timestamp}] DOCKER   - Rolling log buffer dumped to /var/log/sentinel/crash_dump.json`,
      ...prev.slice(0, 6)
    ]);

    setTimeout(() => {
      setIsAlertActive(false);
      setSimulationState({
        sysLoad: 0.18,
        p99Latency: 9.8,
        errRate: 0.00,
        status: 'OPTIMAL'
      });
      setTerminalLogs(prev => [
         `[${new Date().toISOString().replace('T', ' ').slice(0, 19)}] RESOLVED - system self-healed, metrics stable.`,
         ...prev
      ]);
    }, 6000);
  };

  const features = [
    {
      title: "Python SRE Daemon",
      desc: "Autonomously polls systems, evaluating system parameters with strict logging bounds.",
      icon: <Activity className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Automated Logging Buffer",
      desc: "An in-memory rolling storage capturing severity logs, mirroring test architecture limits.",
      icon: <Terminal className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Percentile Anomaly Checks",
      desc: "Performs mathematical p90/p99 tests dynamically inside Python to flag intermittency.",
      icon: <AlertCircle className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Dockerized Portability",
      desc: "Fully containerized and packaged under Linux for seamless deployments.",
      icon: <Layers className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 space-y-12 py-16">
      {/* Section Header */}
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#FF5F1F] font-bold uppercase">FLAGSHIP EXPERIMENTAL INFRASTRUCTURE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Sentinel NOC</h2>
          <p className="text-slate-500 text-sm max-w-lg">Advanced systems observability and automated incident reporting designed for robust site reliability.</p>
        </div>
        <div className="h-[1px] bg-gradient-to-l from-transparent via-slate-800 to-transparent flex-grow max-w-sm hidden md:block ml-8"></div>
      </div>

      {/* Main Bento Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Bento: Narrative and Bullet Specs */}
        <div className="lg:col-span-6 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-slate-900/30 border border-slate-800/80 p-8 rounded-3xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/5 rounded-full blur-[60px]" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[9px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-md font-extrabold uppercase">SRE / Observability</span>
                <span className="text-xs font-mono text-slate-500">March 2026 Release</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-neon-orange transition-colors">
                Sentinel NOC (SRE Pulse-Check)
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                Engineered an intelligent **Python-based automation monitor** designed to continuously inspect distributed system health, match metrics against threshold-alert configurations, detect outliers with precision, and ship automated incident alerts. Fully packaged into a lightweight, isolated Linux-Docker environment to allow reliable execution across remote labs.
              </p>

              {/* Sub-cards Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((feat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-950/50 border border-slate-900 flex flex-col gap-2 hover:border-slate-800 transition-colors">
                    <div className="p-1.5 w-fit rounded-lg bg-slate-900 border border-slate-800">
                      {feat.icon}
                    </div>
                    <h4 className="font-bold text-slate-200 text-xs">{feat.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills info */}
              <div className="pt-6 border-t border-slate-900 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono text-slate-500 mr-2 uppercase">SYS INTEGRATION:</span>
                {["Docker", "Python", "Linux CLI", "Tailwind CSS", "Unittest"].map(tech => (
                  <span key={tech} className="px-2.5 py-1 text-[10px] font-mono bg-slate-950 border border-slate-900 rounded-md text-slate-400 font-semibold">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Bento: Interactive Observable/Diagnostics panel */}
        <div className="lg:col-span-6 flex flex-col justify-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-grow p-6 bg-slate-950 border border-slate-900 rounded-3xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* Top Bar Indicators */}
            <div className="flex items-center justify-between mb-6 border-b border-slate-900 pb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-mono font-bold tracking-tight text-slate-300">SYSTEM OBS_LEVELS</span>
              </div>
              
              <div className="flex gap-2">
                {['metrics', 'terminal', 'architecture'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t as any)}
                    className={`px-3 py-1 font-mono text-[10px] rounded-md border transition-all uppercase ${
                      activeTab === t 
                        ? 'border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold' 
                        : 'border-slate-900 bg-slate-950 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard screens dynamic content */}
            <div className="min-h-[240px] flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                {activeTab === 'metrics' && (
                  <motion.div 
                    key="metrics-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full grid grid-cols-2 gap-4 font-mono"
                  >
                    {/* System Status Radial */}
                    <div className="col-span-2 p-4 bg-slate-900/40 rounded-2xl border border-slate-900 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-500">DAEMON SERVICE HEALTH</div>
                        <div className={`text-lg font-black mt-1 tracking-tight ${
                          simulationState.status === 'ALERT' ? 'text-red-500 animate-pulse' : 
                          simulationState.status === 'DEGRADED' ? 'text-amber-500' : 'text-emerald-400'
                        }`}>
                          {simulationState.status}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-[10px] text-slate-500">REFRESH_RATE</div>
                        <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5 justify-end">
                          <RefreshCw className="w-3 h-3 text-slate-500 animate-spin" />
                          3s POLLING
                        </div>
                      </div>
                    </div>

                    {/* Numeric Dials */}
                    <div className="p-4 bg-slate-900/30 rounded-xl border border-slate-900/80">
                      <div className="text-[10px] text-slate-500 uppercase">System Load (X)</div>
                      <div className="text-2xl font-bold text-slate-100 mt-2">{(simulationState.sysLoad * 100).toFixed(0)}%</div>
                      <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-orange-400 transition-all duration-1000"
                          style={{ width: `${simulationState.sysLoad * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-slate-900/30 rounded-xl border border-slate-900/80 w-full">
                      <div className="text-[10px] text-slate-500 uppercase">p99 Latency</div>
                      <div className="text-2xl font-bold text-slate-100 mt-2">{simulationState.p99Latency}ms</div>
                      <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-cyan-400 transition-all duration-1000"
                          style={{ width: `${Math.min(100, (simulationState.p99Latency / 45) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Alerting Control Trigger */}
                    <div className="col-span-2 p-3 bg-red-950/10 border border-red-950/30 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] text-slate-400">TEST ANOMALY DETECTOR LOOP:</span>
                      </div>
                      <button
                        onClick={triggerSimulatedAnomaly}
                        disabled={isAlertActive}
                        className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 hover:border-red-500/60 transition-all rounded text-red-400 hover:text-white font-bold text-xs disabled:opacity-50"
                      >
                        {isAlertActive ? 'BREACH INJECTED...' : 'INJECT FAULT'}
                      </button>
                    </div>

                  </motion.div>
                )}

                {activeTab === 'terminal' && (
                  <motion.div 
                    key="terminal-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full bg-slate-950/90 text-slate-300 font-mono text-[11px] p-4 rounded-2xl border border-slate-900 max-h-[220px] overflow-y-auto space-y-1.5"
                  >
                    {terminalLogs.map((log, index) => (
                      <div key={index} className={`whitespace-pre-wrap leading-relaxed ${
                        log.includes('CRITICAL') || log.includes('ALERT') ? 'text-red-400' :
                        log.includes('PASS') || log.includes('RESOLVED') ? 'text-emerald-400' :
                        log.includes('INFO') ? 'text-slate-500' : 'text-slate-300'
                      }`}>
                        {log}
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div 
                    key="arch-tab"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 0.99 }}
                    exit={{ opacity: 0 }}
                    className="w-full p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex flex-col gap-3 font-mono text-xs text-slate-400 leading-relaxed"
                  >
                    <div className="flex items-center gap-2 border-b border-slate-900 pb-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>HEALTH MONITOR ARCHITECTURE</span>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 text-center text-[10px] md:text-xs">
                      <div className="p-2 border border-slate-800 bg-slate-950 rounded">Docker App</div>
                      <div className="text-slate-600">→</div>
                      <div className="p-2 border border-orange-500/30 bg-orange-500/10 text-orange-400 rounded col-span-2">Health-Check Loop</div>
                      <div className="text-slate-600">→</div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2">
                      The daemon listens continuously inside lightweight containers. Metrics are packaged into JSON dumps and shipped instantly via REST hooks as threshold alerts, fully shielding deployment pipelines from unexpected memory faults.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simulated Live Alert Overlay Indicator */}
            <AnimatePresence>
              {isAlertActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-red-950/25 pointer-events-none border-2 border-red-500/40 rounded-3xl animate-pulse flex items-center justify-center"
                >
                  <div className="px-4 py-2 bg-slate-900 border border-red-500 rounded-xl font-mono text-xs text-red-400 font-extrabold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    SIMULATED ANOMALY BREACH DISPATCHED
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Panel controls */}
            <div className="mt-8 border-t border-slate-900 pt-4 flex items-center justify-between text-xs text-slate-500 z-10">
              <span className="font-mono">PROJECT INSTANCE: DOCKERIZE_LINUX</span>
              
              <a 
                href="https://huggingface.co/spaces/yuvraj0705/sre-pulse-check" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-400 hover:text-white transition-colors"
              >
                Repo Link <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
