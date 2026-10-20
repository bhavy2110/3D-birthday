import { useEffect, useMemo, useRef, useState } from "react"

const memories = [
  {
    label: "Tari aa smile yrrrrrrrrrrrrrrrrrr 😍😍😍",
    note: "Tari aa smile joi ne yrrrrrrrrrrrrrr hu gando thai jav hu yrrrrrrrrrrr 🤭🤪🤭 ",
    image:
      "images/photo6.jpg.jpeg",
    rotate: "rotate-2",
  },
  {
    label: "My favourite picture of us",
    note: "yrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr a photo joi ne mari khushi yrrrrrrrrrr 😍🤭😍 ",
    image:
      "images/puzzle.jpg.jpeg",
    rotate: "-rotate-2",
  },
   {
    label: "The way you make life glow",
    note: "yrrrrrrrrrrrrr te mari life ne ek No. banayi he yrrrrrrrr 🥹🥹🥹",
    image:
      "images/photo4.jpg.jpeg",
    rotate: "-rotate-3",
  },
]

const reasons = [
  ["01", "Your beautiful heart", "You make kindness look effortless."],
  ["02", "That unforgettable smile", "The one that can fix even my worst day."],
  ["03", "Your perfectly weird side", "Life with you could never be boring."],
  [
    "04",
    "The way you believe in me",
    "You make me want to become better every day.",
  ],
]

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.8 6.1 3.9 9.2 10 10-6.1.8-9.2 3.9-10 10-.8-6.1-3.9-9.2-10-10 6.1-.8 9.2-3.9 10-10Z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m8 4 8 8-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        left: `${(index * 19 + 7) % 96}%`,
        animationDelay: `${(index % 7) * -1.7}s`,
        animationDuration: `${9 + (index % 5) * 2}s`,
        fontSize: `${10 + (index % 4) * 5}px`,
      })),
    [],
  )

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart, index) => (
        <span key={index} style={heart}>
          ♥
        </span>
      ))}
    </div>
  )
}

function Confetti({ active }: { active: boolean }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 70 }, (_, index) => ({
        left: `${(index * 37) % 100}%`,
        animationDelay: `${(index % 12) * 0.06}s`,
        animationDuration: `${2.8 + (index % 8) * 0.17}s`,
        background: ["#f7c873", "#ff7597", "#fff1d2", "#b34f70"][index % 4],
        transform: `rotate(${(index * 83) % 360}deg)`,
      })),
    [],
  )

  if (!active) return null
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((piece, index) => (
        <i key={index} style={piece} />
      ))}
    </div>
  )
}

function GiftBox() {
  return (
    <div className="gift-scene" aria-hidden="true">
      <div className="gift-shadow" />
      <div className="gift-box">
        <div className="gift-face gift-front">
          <span />
        </div>
        <div className="gift-face gift-right" />
        <div className="gift-face gift-top">
          <i className="ribbon-horizontal" />
        </div>
        <div className="gift-lid">
          <div className="lid-front" />
          <div className="lid-right" />
          <div className="lid-top" />
          <div className="bow bow-left" />
          <div className="bow bow-right" />
          <div className="bow-knot" />
        </div>
        <div className="gift-glow" />
      </div>
    </div>
  )
}

function BirthdayCake() {
  return (
    <div
      className="cake-scene"
      aria-label="A birthday cake with glowing candles"
    >
      <div className="cake-shadow" />
      <div className="cake-plate" />
      <div className="cake-layer cake-bottom">
        <i />
        <i />
        <i />
      </div>
      <div className="cake-layer cake-top">
        <i />
        <i />
      </div>
      <div className="cake-icing" />
      <div className="candles">
        {[0, 1, 2].map((candle) => (
          <span key={candle} className={`candle candle-${candle + 1}`}>
            <i className="flame" />
          </span>
        ))}
      </div>
      <div className="cake-sparkles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

function App() {
  const [opened, setOpened] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const [finalSurprise, setFinalSurprise] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!heroRef.current) return
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      heroRef.current.style.setProperty("--mouse-x", `${x * 10}deg`)
      heroRef.current.style.setProperty("--mouse-y", `${y * -7}deg`)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  const openSurprise = () => {
    setOpened(true)
    setConfetti(true)
    document.body.classList.add("surprise-open")
    window.setTimeout(() => setConfetti(false), 5000)
  }

  const scrollToStory = () =>
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })

  const revealFinalSurprise = () => {
    setFinalSurprise(true)
    setConfetti(true)
    window.setTimeout(() => setConfetti(false), 5000)
  }

  return (
    <main className={opened ? "app opened" : "app"}>
      <Confetti active={confetti} />

      <section className="intro" aria-hidden={opened}>
        <div className="intro-orbit orbit-one" />
        <div className="intro-orbit orbit-two" />
        <div className="intro-copy">
          <p className="eyebrow">
            <span />A little something, just for you
            <span />
          </p>
          <h1>
            Hey, <em>beautiful.</em>
          </h1>
          <p className="intro-note">
            Someone who loves you very much made you a tiny universe.
          </p>
          <button
            className="primary-button"
            type="button"
            onClick={openSurprise}
          >
            <span>Open your surprise</span>
            <SparkleIcon />
          </button>
          <p className="tiny-note">Best experienced with a big smile</p>
        </div>
        <GiftBox />
      </section>

      <div className="birthday-world" aria-hidden={!opened}>
        <FloatingHearts />

        <header className="topbar">
          <a
            className="love-mark"
            href="#home"
            aria-label="Back to the beginning"
          >
            <HeartIcon filled />
            <span>Made with all my love</span>
          </a>
          <nav aria-label="Birthday story">
            <a href="#story">Our magic</a>
            <a href="#letter">For you</a>
          </nav>
        </header>

        <section className="hero" id="home" ref={heroRef}>
          <div className="hero-aura aura-one" />
          <div className="hero-aura aura-two" />
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="line" />
              <span>Today is all about you</span>
              <span className="line" />
            </div>
            <p className="hero-script">Happy Birthday</p>
            <h2>TO MY FAVOURITE PERSON</h2>
            <p className="hero-message">
              You are the warmest chapter of my life, the prettiest reason
              behind my smile, and my favourite place to call home.
            </p>
            <button
              className="scroll-button"
              type="button"
              onClick={scrollToStory}
            >
              <span>See what makes you magical</span>
              <span className="arrow-circle">
                <ArrowIcon />
              </span>
            </button>
          </div>
          <div className="cake-wrap">
            <span className="cake-label label-one">make a wish</span>
            <span className="cake-label label-two">you deserve the world</span>
            <BirthdayCake />
          </div>
          <div className="scroll-hint">
            <span />
            Scroll for more
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="section-heading">
            <p>Little pieces of our story</p>
            <h2>
              Every moment with you
              <br />
              feels like <em>magic.</em>
            </h2>
          </div>
          <div className="memory-grid">
            {memories.map((memory) => (
              <article
                className={`polaroid ${memory.rotate}`}
                key={memory.label}
              >
                <div className="photo-wrap">
                  <img
                    src={memory.image}
                    alt="A romantic moment at golden hour"
                  />
                  <span className="photo-heart">
                    <HeartIcon filled />
                  </span>
                </div>
                <h3>{memory.label}</h3>
                <p>{memory.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reasons-section">
          <div className="reasons-intro">
            <p className="eyebrow gold">In case you ever forget</p>
            <h2>
              Here are a few reasons
              <br />I adore <em>you.</em>
            </h2>
            <p>
              This list could go on forever, but we have the rest of our lives
              for that.
            </p>
          </div>
          <div className="reason-list">
            {reasons.map(([number, title, note]) => (
              <article className="reason-row" key={number}>
                <span className="reason-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{note}</p>
                </div>
                <HeartIcon />
              </article>
            ))}
          </div>
        </section>

        <section className="letter-section" id="letter">
          <div className="letter-stars" aria-hidden="true">
            ✦　·　✧　　·　✦
          </div>
          <p className="eyebrow gold">One last thing</p>
          <h2>
            A little note for
            <br />
            my <em>favourite girl.</em>
          </h2>
          <div className={`envelope ${letterOpen ? "is-open" : ""}`}>
            <div className="letter">
              <p>My love,</p>
              <p>
                On your birthday, I just want you to see yourself the way I see
                you — endlessly special, beautifully brave, and impossible not
                to love.
              </p>
              <p>
                Thank you for being my peace, my biggest smile, and my favourite
                adventure. I hope this year brings you every bit of happiness
                you bring into my life.
              </p>
              <p className="signature">Forever yours ♡</p>
            </div>
            <div className="envelope-back" />
            <div className="envelope-front" />
            <div className="envelope-flap" />
            <button
              type="button"
              className="wax-seal"
              onClick={() => setLetterOpen((current) => !current)}
              aria-label={letterOpen ? "Close love letter" : "Open love letter"}
            >
              <HeartIcon filled />
            </button>
          </div>
          <button
            type="button"
            className="letter-button"
            onClick={() => setLetterOpen((current) => !current)}
          >
            {letterOpen ? "Fold the letter" : "Open my letter"}
            <span>→</span>
          </button>

          <div
            className={`final-surprise ${finalSurprise ? "is-revealed" : ""}`}
          >
            {!finalSurprise ? (
              <>
                <span className="surprise-line" />
                <p>Wait… there is one more thing</p>
                <button
                  type="button"
                  className="final-surprise-button"
                  onClick={revealFinalSurprise}
                >
                  <span className="mini-gift" aria-hidden="true">
                    <i />
                  </span>
                  Tap for one last surprise
                </button>
              </>
            ) : (
              <div className="promise-card">
                <div className="promise-glow" />
                <span className="promise-sparkle sparkle-left">✦</span>
                <span className="promise-sparkle sparkle-right">✦</span>
                <div className="promise-heart">
                  <HeartIcon filled />
                </div>
                <p className="promise-kicker">My birthday promise to you</p>
                <h3>
                  No matter where life takes us,
                  <em>I’ll keep choosing you.</em>
                </h3>
                <p className="promise-copy">
                  Through every laugh, every adventure, every difficult day, and
                  every beautiful tomorrow — you will always have my hand to
                  hold and my heart to call home.
                </p>
                <div className="forever-badge">
                  <span>YOU</span>
                  <HeartIcon filled />
                  <span>ME</span>
                </div>
                <p className="promise-signature">
                  To us, forever &amp; always ♡
                </p>
              </div>
            )}
          </div>
        </section>

        <footer>
          <HeartIcon filled />
          <p>Happy birthday, beautiful. Today, tomorrow, always.</p>
          <span>Made only for you</span>
        </footer>
      </div>
    </main>
  )
}

export default App
