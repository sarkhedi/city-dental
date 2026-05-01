import React, { useState, useEffect } from 'react';

// --- SOUND FEEDBACK ENGINE ---
const playPop = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    // Graceful fallback if AudioContext is blocked or unsupported
  }
};

// --- ADVANCED MATH ENGINE ---
const mathHelpers = `
  const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
  const nPr = (n, r) => fact(n) / fact(n - r);
  const nCr = (n, r) => fact(n) / (fact(r) * fact(n - r));
`;

// --- ICONS ---
const HistoryIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg> );
const TrashIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg> );
const DeleteIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><line x1="18" x2="12" y1="9" y2="15"></line><line x1="12" x2="18" y1="9" y2="15"></line></svg> );

// --- UNIT CONVERTER ENGINE ---
const conversionRates = {
  Length: { Meters: 1, Kilometers: 0.001, Centimeters: 100, Miles: 0.000621371, Feet: 3.28084 },
  Weight: { Kilograms: 1, Grams: 1000, Pounds: 2.20462, Ounces: 35.274 },
  Temperature: { Celsius: 'C', Fahrenheit: 'F', Kelvin: 'K' } 
};

const convertValue = (val, from, to, category) => {
  const num = parseFloat(val);
  if (isNaN(num)) return '';
  
  if (category === 'Temperature') {
    let c = num;
    if (from === 'Fahrenheit') c = (num - 32) * 5/9;
    if (from === 'Kelvin') c = num - 273.15;
    
    if (to === 'Celsius') return c;
    if (to === 'Fahrenheit') return (c * 9/5) + 32;
    if (to === 'Kelvin') return c + 273.15;
  }
  
  const rate1 = conversionRates[category][from];
  const rate2 = conversionRates[category][to];
  return num * (rate2 / rate1);
};


// --- GLASSMORPHIC BUTTON (WHITE THEME) ---
const Button = ({ label, icon, onClick, variant = 'normal', className = '' }) => {
  let style = "bg-white/60 hover:bg-white/90 active:bg-slate-100 border border-white/70 text-slate-700 shadow-[0_4px_12px_rgba(0,0,0,0.04)]";
  
  if (variant === 'accent') {
    style = "bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-[0_4px_15px_rgba(6,182,212,0.3)] border-none";
  } else if (variant === 'operator') {
    style = "bg-white/70 hover:bg-white active:bg-slate-100 border border-white/80 text-blue-600 shadow-[0_4px_12px_rgba(0,0,0,0.04)] font-bold";
  } else if (variant === 'advanced') {
    style = "bg-white/40 hover:bg-white/70 active:bg-slate-100 border border-white/50 text-purple-600 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)]";
  } else if (variant === 'danger') {
    style = "bg-white/60 hover:bg-white/90 active:bg-red-100 border border-white/70 text-red-500 shadow-[0_4px_12px_rgba(0,0,0,0.04)] font-bold";
  }

  const handleClick = () => {
    playPop();
    onClick(label);
  };

  return (
    <button 
      onClick={handleClick}
      className={`rounded-2xl flex items-center justify-center text-2xl font-medium transition-all duration-200 select-none cursor-pointer active:scale-95 ${style} ${className}`}
      aria-label={`Calculator button ${label}`}
    >
      {icon || label}
    </button>
  );
};

// --- UNIT CONVERTER UI (WHITE THEME) ---
const UnitConverterUI = () => {
  const [category, setCategory] = useState('Length');
  const [val1, setVal1] = useState('1');
  const [val2, setVal2] = useState('');
  const [unit1, setUnit1] = useState('Meters');
  const [unit2, setUnit2] = useState('Kilometers');

  useEffect(() => {
    if (!val1) { setVal2(''); return; }
    const res = convertValue(val1, unit1, unit2, category);
    if (res !== '') setVal2(Number(res.toPrecision(8)).toString());
  }, [val1, unit1, unit2, category]);

  const handleCategoryChange = (e) => {
    playPop();
    const cat = e.target.value;
    setCategory(cat);
    const units = Object.keys(conversionRates[cat]);
    setUnit1(units[0]);
    setUnit2(units[1]);
  };

  return (
    <section className="flex flex-col gap-6 w-full text-slate-800 animate-fade-in" aria-label="Unit Converter">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-600 pl-2 font-medium">Conversion Category</label>
        <select 
          value={category} 
          onChange={handleCategoryChange}
          className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl p-3 text-slate-800 outline-none focus:border-blue-400 transition-colors cursor-pointer shadow-sm"
        >
          {Object.keys(conversionRates).map(c => <option key={c} value={c} className="bg-white text-slate-800">{c}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-600 pl-2 font-medium">From</label>
        <div className="flex bg-white/50 border border-white/80 rounded-2xl overflow-hidden focus-within:border-blue-400 transition-colors shadow-inner">
          <input 
            type="number" 
            value={val1} 
            onChange={(e) => { setVal1(e.target.value); }}
            className="bg-transparent p-4 w-2/3 outline-none text-2xl text-slate-800"
            aria-label="Input value to convert"
          />
          <select 
            value={unit1} 
            onChange={(e) => { playPop(); setUnit1(e.target.value); }}
            className="bg-white/60 p-4 w-1/3 outline-none text-sm cursor-pointer border-l border-white/80 text-slate-800"
          >
            {Object.keys(conversionRates[category]).map(u => <option key={u} value={u} className="bg-white text-slate-800">{u}</option>)}
          </select>
        </div>
      </div>

      <div className="flex justify-center text-slate-400 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-600 pl-2 font-medium">To</label>
        <div className="flex bg-white/50 border border-white/80 rounded-2xl overflow-hidden focus-within:border-blue-400 transition-colors shadow-inner">
          <input 
            type="text" 
            readOnly
            value={val2} 
            className="bg-transparent p-4 w-2/3 outline-none text-2xl text-blue-600 font-semibold"
            aria-label="Converted result"
          />
          <select 
            value={unit2} 
            onChange={(e) => { playPop(); setUnit2(e.target.value); }}
            className="bg-white/60 p-4 w-1/3 outline-none text-sm cursor-pointer border-l border-white/80 text-slate-800"
          >
            {Object.keys(conversionRates[category]).map(u => <option key={u} value={u} className="bg-white text-slate-800">{u}</option>)}
          </select>
        </div>
      </div>
    </section>
  );
};


// --- MAIN APP COMPONENT ---
export const CalculatorApp = () => {
  const [activeTab, setActiveTab] = useState('calculator'); 
  const [showHistory, setShowHistory] = useState(false);
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handlePress = (val) => {
    if (val === 'AC') {
      setInput('0');
      setResult('');
    } else if (val === 'DEL') {
      if (input.length > 1) {
        setInput(input.slice(0, -1));
      } else {
        setInput('0');
      }
    } else if (val === '=') {
      try {
        if (['+', '−', '×', '÷', '.', 'nPr', 'nCr', '^'].some(op => input.endsWith(op))) return;
        
        let parsed = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        
        // Advanced math parsing via regex
        parsed = parsed.replace(/(\d+(?:\.\d+)?)!/g, 'fact($1)');
        parsed = parsed.replace(/(\d+(?:\.\d+)?)nPr(\d+(?:\.\d+)?)/g, 'nPr($1,$2)');
        parsed = parsed.replace(/(\d+(?:\.\d+)?)nCr(\d+(?:\.\d+)?)/g, 'nCr($1,$2)');
        parsed = parsed.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, 'Math.pow($1,$2)');

        // Safely evaluate
        const execStr = `${mathHelpers} return ${parsed};`;
        const res = new Function(execStr)();
        
        if (!isFinite(res) || isNaN(res)) {
            setInput('Error');
            return;
        }

        const formattedRes = Math.round(res * 10000000) / 10000000;
        setResult(input + ' =');
        setInput(String(formattedRes));
        setHistory([{ equation: input, result: formattedRes }, ...history]);
      } catch (e) {
        setInput('Error');
      }
    } else {
      const isOp = ['+', '−', '×', '÷', 'nPr', 'nCr', '^'].includes(val);
      const hasTrailingOp = /[\+−×÷\^]$|nPr$|nCr$/.test(input);
      
      if (isOp && hasTrailingOp) {
        const replaced = input.replace(/[\+−×÷\^]$|nPr$|nCr$/, val);
        setInput(replaced);
        return;
      }

      if (val === '!') {
         setInput(input + '!');
         return;
      }

      if (input === '0' && !isOp && val !== '.') {
        setInput(val);
      } else if (input === 'Error') {
        setInput(val);
      } else {
        setInput(input + val);
      }
    }
  };

  const clearHistory = () => {
    playPop();
    setHistory([]);
  };

  return (
    <>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.15); border-radius: 20px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(0,0,0,0.25); }
          
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>
      
      <article className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[3rem] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-500 relative z-10">
        
        {/* Main Interface */}
        <div className="w-[340px] flex flex-col gap-6">
          
          {/* SEO Optimized Navigation */}
          <nav className="flex bg-slate-200/50 border border-white/60 p-1 rounded-2xl w-full" aria-label="Tool Selection">
            <button 
              onClick={() => { playPop(); setActiveTab('calculator'); }} 
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'calculator' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'}`}
              aria-pressed={activeTab === 'calculator'}
            >
              Calculator
            </button>
            <button 
              onClick={() => { playPop(); setActiveTab('converter'); }} 
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'converter' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'}`}
              aria-pressed={activeTab === 'converter'}
            >
              Converter
            </button>
          </nav>

          {activeTab === 'calculator' ? (
            <section className="animate-fade-in flex flex-col gap-6" aria-label="Scientific Calculator">
              {/* Display screen */}
              <div className="h-28 rounded-3xl p-4 flex flex-col items-end justify-end bg-white/70 border border-white/80 overflow-hidden shadow-inner relative">
                <button 
                  onClick={() => { playPop(); setShowHistory(!showHistory); }} 
                  className={`absolute top-4 left-4 p-2 rounded-full ${showHistory ? 'text-blue-500 bg-white shadow-sm' : 'text-slate-400 hover:text-slate-600 hover:bg-white/60'} transition-all`}
                  aria-label="Toggle History Panel"
                  aria-expanded={showHistory}
                >
                  <HistoryIcon />
                </button>
                
                <div className="text-lg tracking-wider mb-1 opacity-70 text-slate-500 truncate w-full text-right" aria-live="polite">{result}</div>
                <div className="text-4xl font-bold tracking-tight text-slate-800 truncate w-full text-right" aria-live="assertive">{input}</div>
              </div>

              {/* Scientific Keypad */}
              <div className="grid grid-cols-5 gap-2.5">
                <Button label="AC" variant="danger" onClick={handlePress} className="h-12 text-lg" />
                <Button label="DEL" icon={<DeleteIcon />} variant="operator" onClick={handlePress} className="h-12" />
                <Button label="%" variant="operator" onClick={handlePress} className="h-12 text-lg" />
                <Button label="÷" variant="operator" onClick={handlePress} className="h-12 text-2xl" />
                <Button label="!" variant="advanced" onClick={handlePress} className="h-12" />

                <Button label="7" onClick={handlePress} className="h-12" />
                <Button label="8" onClick={handlePress} className="h-12" />
                <Button label="9" onClick={handlePress} className="h-12" />
                <Button label="×" variant="operator" onClick={handlePress} className="h-12 text-2xl" />
                <Button label="nPr" variant="advanced" onClick={handlePress} className="h-12 text-sm" />

                <Button label="4" onClick={handlePress} className="h-12" />
                <Button label="5" onClick={handlePress} className="h-12" />
                <Button label="6" onClick={handlePress} className="h-12" />
                <Button label="−" variant="operator" onClick={handlePress} className="h-12 text-2xl" />
                <Button label="nCr" variant="advanced" onClick={handlePress} className="h-12 text-sm" />

                <Button label="1" onClick={handlePress} className="h-12" />
                <Button label="2" onClick={handlePress} className="h-12" />
                <Button label="3" onClick={handlePress} className="h-12" />
                <Button label="+" variant="operator" onClick={handlePress} className="h-12 text-2xl" />
                <Button label="^" variant="advanced" onClick={handlePress} className="h-12 text-lg" />

                <Button label="0" onClick={handlePress} className="col-span-2 h-12" />
                <Button label="." onClick={handlePress} className="h-12 text-2xl pb-2" />
                <Button label="=" variant="accent" onClick={handlePress} className="col-span-2 h-12 text-2xl" />
              </div>
            </section>
          ) : (
            <UnitConverterUI />
          )}
        </div>

        {/* Sliding History Panel */}
        <aside 
          className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col ${
            showHistory && activeTab === 'calculator'
              ? 'md:w-[320px] md:opacity-100 h-[380px] md:h-auto mt-6 md:mt-0 opacity-100' 
              : 'md:w-0 md:opacity-0 h-0 md:h-auto opacity-0'
          }`}
          aria-hidden={!showHistory}
        >
          <div className="w-full md:w-[320px] flex flex-col h-full pl-0 md:pl-6 md:border-l border-slate-200/50">
            <div className="flex justify-between items-center px-2 mb-4 mt-2">
              <h2 className="text-xl font-bold text-slate-800 tracking-wide">History</h2>
              <button 
                onClick={clearHistory}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 hover:bg-red-100 text-red-500 transition-all hover:scale-105 border border-white/80 shadow-sm"
                title="Clear History"
                aria-label="Clear calculation history"
              >
                <TrashIcon />
              </button>
            </div>
            
            <div className="flex-1 rounded-3xl p-5 bg-white/50 border border-white/60 shadow-inner overflow-y-auto flex flex-col gap-4 custom-scrollbar">
              {history.length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
                  Your calculation history will appear here
                </div>
              ) : (
                history.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-end border-b border-slate-200/50 pb-3 mb-1 last:border-0 last:mb-0 last:pb-0 animate-fade-in">
                    <div className="text-sm text-slate-500">{item.equation}</div>
                    <div className="text-2xl font-semibold text-blue-600">={item.result}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </aside>

      </article>
    </>
  );
};

// --- FULL SCREEN WRAPPER FOR DEMO WITH SEO HTML5 TAGS ---
export default function GlassmorphismCalculatorShowcase() {
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center font-sans selection:bg-blue-500/30">
      
      {/* Hidden SEO Text for Google Ranking */}
      <header className="sr-only">
        <h1>Advanced Glassmorphism Scientific Calculator & Unit Converter</h1>
        <p>A premium online calculator featuring advanced mathematical functions including factorials, permutations, combinations, and a comprehensive unit converter tool built with modern glassmorphism UI.</p>
      </header>

      {/* Decorative Animated Pastel Orbs for White Theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Main Component */}
      <CalculatorApp />
    </main>
  );
}
