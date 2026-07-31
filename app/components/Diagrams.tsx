export function HeroSystem() {
  return (
    <figure className="hero-system">
      <figcaption>From enterprise complexity to dependable operations</figcaption>
      <svg viewBox="0 0 680 560" role="img" aria-labelledby="hero-system-title hero-system-desc">
        <title id="hero-system-title">Production engineering system</title>
        <desc id="hero-system-desc">Existing applications, data, and cloud infrastructure move through identity, policy, and operating controls into trusted production services.</desc>
        <g className="diagram-lines">
          <path d="M142 128 H240" /><path d="M142 276 H240" /><path d="M142 424 H240" />
          <path d="M440 128 H538" /><path d="M440 276 H538" /><path d="M440 424 H538" />
          <path d="M340 94 V466" />
        </g>
        <g className="diagram-source">
          <rect x="28" y="84" width="114" height="88" rx="2" />
          <text x="47" y="117">EXISTING</text><text x="47" y="140">APPLICATIONS</text>
          <rect x="28" y="232" width="114" height="88" rx="2" />
          <text x="47" y="265">ENTERPRISE</text><text x="47" y="288">DATA</text>
          <rect x="28" y="380" width="114" height="88" rx="2" />
          <text x="47" y="413">CLOUD</text><text x="47" y="436">FOUNDATIONS</text>
        </g>
        <g className="diagram-control">
          <rect x="240" y="56" width="200" height="448" rx="4" />
          <text className="diagram-kicker" x="272" y="94">CONTROL LAYER</text>
          <rect x="272" y="126" width="136" height="64" rx="2" />
          <text x="297" y="164">IDENTITY</text>
          <rect x="272" y="216" width="136" height="64" rx="2" />
          <text x="294" y="254">POLICY</text>
          <rect x="272" y="306" width="136" height="64" rx="2" />
          <text x="293" y="344">VISIBILITY</text>
          <rect x="272" y="396" width="136" height="64" rx="2" />
          <text x="294" y="434">RECOVERY</text>
        </g>
        <g className="diagram-output">
          <rect x="538" y="84" width="114" height="384" rx="3" />
          <circle cx="595" cy="150" r="24" />
          <path d="M584 150 l8 8 16 -18" />
          <text x="559" y="214">TRUSTED</text><text x="559" y="237">PRODUCTION</text>
          <line x1="562" y1="276" x2="628" y2="276" />
          <text x="562" y="314">SECURE</text>
          <text x="562" y="348">RELIABLE</text>
          <text x="562" y="382">OBSERVABLE</text>
          <text x="562" y="416">COST-AWARE</text>
        </g>
      </svg>
      <div className="figure-legend"><span>Integration</span><span>Control</span><span>Evidence</span></div>
    </figure>
  );
}

export function ProgramFit() {
  return (
    <figure className="program-fit">
      <figcaption>Program integration model</figcaption>
      <div className="fit-node fit-agency"><span>01</span><strong>Agency mission &amp; program leadership</strong></div>
      <div className="fit-arrow" aria-hidden="true">↓</div>
      <div className="fit-node fit-prime"><span>02</span><strong>Prime contractor or lead integrator</strong></div>
      <div className="fit-arrow" aria-hidden="true">↓</div>
      <div className="fit-node fit-aclaud"><span>03</span><strong>aclaud specialized engineering</strong></div>
      <div className="fit-branches">
        <div>Software<br />foundations</div>
        <div>Data &amp; AI<br />foundations</div>
        <div>Cloud &amp;<br />operating controls</div>
      </div>
    </figure>
  );
}
