const fs = require('fs');
const path = require('path');

// Article data for keyword-2, 3, 4
const articles = {
  2: {
    title: "What Does It Mean to Dream About Teeth Falling Out?",
    category: "Anxiety Dreams",
    date: "Nov 26, 2025",
    readTime: "6 min read",
    quickAnswer: "Dreaming about teeth falling out typically represents anxiety about appearance, loss of control, or communication difficulties. It can symbolize powerlessness, aging fears, or major life transitions. The condition of the teeth and how they fall reflects your level of stress and self-confidence in waking life.",
    scenarios: [
      {
        title: "All Teeth Falling Out at Once",
        meaning: "Complete loss of control or overwhelming anxiety. You're experiencing a situation where everything feels like it's falling apart simultaneously. This often occurs during major life crises or periods of extreme stress."
      },
      {
        title: "Teeth Crumbling or Decaying",
        meaning: "Gradual erosion of confidence or self-worth. Something in your life is slowly deteriorating—a relationship, job satisfaction, or health. The decay represents neglect or failure to address problems early."
      },
      {
        title: "Pulling Your Own Teeth Out",
        meaning: "Self-sabotage or forced removal of something painful. You're taking active steps to end a situation, even though it hurts. This can represent difficult decisions where you must sacrifice something important."
      },
      {
        title: "Teeth Falling Out While Eating",
        meaning: "Unable to properly 'digest' or process life experiences. You're taking on more than you can handle, or struggling to extract value from situations. It suggests feeling unprepared for responsibilities."
      },
      {
        title: "Front Teeth vs. Molars Falling Out",
        meaning: "Front teeth represent public image and first impressions—losing them indicates social anxiety. Molars represent foundational support and practical matters—losing them suggests structural problems in life."
      },
      {
        title: "Teeth Falling Out in Public",
        meaning: "Fear of public embarrassment or exposure. You're worried about being judged or your flaws being revealed. This amplifies social anxiety and the desire to maintain appearances."
      },
      {
        title: "Spitting Out Teeth",
        meaning: "Rejecting toxic words or situations. You're purging negativity from your life—words unsaid, relationships ended, or beliefs abandoned. It can be a positive sign of cleansing."
      },
      {
        title: "Teeth Growing Back After Falling",
        meaning: "Resilience and renewal. Despite setbacks, you have the capacity to recover and rebuild. This positive variation suggests confidence in your ability to bounce back from difficulties."
      }
    ],
    positive: [
      "Renewal and transformation",
      "Releasing old patterns",
      "Making necessary changes",
      "Personal growth opportunity",
      "Shedding false appearances",
      "Speaking your truth"
    ],
    negative: [
      "Loss of power or control",
      "Appearance anxiety",
      "Fear of aging",
      "Communication breakdown",
      "Feelings of inadequacy",
      "Social embarrassment"
    ],
    lifeInsights: [
      {
        area: "For Your Self-Image",
        text: "You're overly concerned with how others perceive you. This dream reveals deep-seated insecurities about appearance, age, or social status. Work on building internal confidence rather than external validation."
      },
      {
        area: "For Your Communication",
        text: "You're struggling to express yourself or feeling unheard. Teeth are tools for speech—losing them suggests difficulty articulating your thoughts or fear that your words lack impact."
      },
      {
        area: "For Your Life Changes",
        text: "You're in a transition period that feels out of your control. Major changes—job loss, relationship ending, aging—trigger these dreams as your psyche processes feelings of powerlessness."
      }
    ],
    faqs: [
      {
        q: "Is this dream predicting something bad will happen?",
        a: "No. Dreams about teeth rarely predict actual tooth loss. They're symbolic expressions of psychological stress, not prophetic warnings. The dream reflects current anxieties rather than future events."
      },
      {
        q: "Why is this one of the most common dreams?",
        a: "Teeth represent fundamental aspects of survival and social acceptance—eating, speaking, smiling. They're visible markers of health and attractiveness, making them powerful symbols for anxiety about competence and appearance."
      },
      {
        q: "Does it mean I'm aging or dying?",
        a: "Usually not literally. While it can reflect fears about aging, it more commonly represents feeling unprepared, losing vitality, or transitioning between life stages. It's about psychological rather than physical deterioration."
      },
      {
        q: "What if teeth falling out doesn't bother me in the dream?",
        a: "This suggests acceptance of change or loss. You're emotionally prepared for transitions and don't define yourself by external appearances. It's a healthier variation indicating resilience."
      }
    ],
    emotions: [
      {
        feeling: "panicked and distressed",
        meaning: "You're overwhelmed by current life circumstances and feel everything is spiraling out of control."
      },
      {
        feeling: "embarrassed or ashamed",
        meaning: "Deep social anxiety and fear of judgment dominate your waking thoughts."
      },
      {
        feeling: "relieved or indifferent",
        meaning: "You're ready to let go of false pretenses and embrace authentic self-expression."
      },
      {
        feeling: "curious or fascinated",
        meaning: "You're observing your own transformation with interest rather than fear—a sign of emotional maturity."
      }
    ],
    context: [
      { item: "Teeth Falling Into Hands", meaning: "You're catching and holding onto what you're losing—trying to maintain control or save the situation." },
      { item: "Unable to Find Fallen Teeth", meaning: "Loss feels permanent and irretrievable. You believe you can't recover from current setbacks." },
      { item: "Bloody vs. Bloodless", meaning: "Blood indicates emotional pain accompanying the loss. Bloodless suggests detached, clinical acceptance of change." },
      { item: "Dentist or No Dentist Present", meaning: "Dentist represents external help or authority figures. Their presence suggests you believe others can fix your problems." }
    ],
    finalQuote: "Teeth falling out dreams remind us that our deepest anxieties often center on being seen, heard, and valued. They ask: Are you sacrificing your authentic voice for acceptance? Are you so focused on appearances that you've neglected your foundation? These dreams aren't predictions—they're invitations to reclaim your power by addressing what truly needs attention in your waking life."
  },

  3: {
    title: "What Does It Mean to Dream About Being Chased?",
    category: "Nightmares",
    date: "Nov 26, 2025",
    readTime: "7 min read",
    quickAnswer: "Dreaming about being chased typically represents avoidance, fear, or running from problems you need to confront. It symbolizes internal conflicts, suppressed emotions, or situations you're trying to escape. The pursuer often represents parts of yourself or issues you're refusing to acknowledge.",
    scenarios: [
      {
        title: "Being Chased by a Stranger",
        meaning: "Unknown threat or unacknowledged aspect of yourself. The stranger represents qualities you deny or problems you haven't identified yet. It's your subconscious trying to get your attention about something you're ignoring."
      },
      {
        title: "Being Chased by an Animal",
        meaning: "Instinctual fears or primal emotions pursuing you. Different animals have specific meanings—dogs (loyalty issues), bears (mother figures), snakes (transformation). The animal represents raw, untamed aspects of your psyche."
      },
      {
        title: "Being Chased but Unable to Run",
        meaning: "Paralysis in facing problems. You feel stuck and powerless to escape your current situation. This reflects feelings of being trapped by circumstances, relationships, or responsibilities in waking life."
      },
      {
        title: "Being Chased by Someone You Know",
        meaning: "That person represents qualities you associate with them that you're avoiding in yourself. Alternatively, unresolved conflict with that specific person needs addressing."
      },
      {
        title: "Chased by a Monster or Shadow Figure",
        meaning: "Your shadow self—rejected parts of your personality. Jung called this the 'shadow'—everything you don't want to be. The monster is you, and running makes it stronger."
      },
      {
        title: "Being Chased and Caught",
        meaning: "Confrontation is imminent. Being caught forces you to face what you've avoided. Often, this marks a turning point where avoidance becomes impossible."
      },
      {
        title: "Turning to Face Your Pursuer",
        meaning: "Breakthrough moment! Confronting the chaser usually causes it to disappear or transform. This represents courage to face fears directly and often leads to lucid dreaming."
      },
      {
        title: "Being Chased Through Familiar Places",
        meaning: "The threat has invaded your safe spaces. Problems have permeated all aspects of your life, leaving nowhere to hide. This intensifies the feeling of being overwhelmed."
      }
    ],
    positive: [
      "Motivation to address problems",
      "Awareness of avoidance patterns",
      "Energy and survival instinct",
      "Impetus for change",
      "Recognition of suppressed issues",
      "Opportunity for confrontation"
    ],
    negative: [
      "Avoidance and denial",
      "Anxiety and stress",
      "Feeling pursued by problems",
      "Inability to rest or relax",
      "Overwhelming fear",
      "Powerlessness"
    ],
    lifeInsights: [
      {
        area: "For Your Personal Growth",
        text: "What you resist persists. This dream reveals your avoidance strategies. The more you run, the more persistent the pursuer becomes. Growth requires turning around and facing what scares you."
      },
      {
        area: "For Your Relationships",
        text: "You're avoiding difficult conversations or emotions within relationships. The chase represents conflict, intimacy, or commitment issues you need to address directly rather than escape."
      },
      {
        area: "For Your Career",
        text: "Unfinished responsibilities or performance anxiety chase you. You're procrastinating on important tasks or running from career decisions that require courage."
      }
    ],
    faqs: [
      {
        q: "Why do I keep having this dream repeatedly?",
        a: "Recurring chase dreams mean you're still avoiding the same issue. Your subconscious repeats the dream until you confront what you're running from. The dream will stop when you address the underlying problem."
      },
      {
        q: "What should I do if I'm being chased in a dream?",
        a: "Try to stop running and turn to face your pursuer. Ask them what they want or why they're chasing you. Most people discover the 'monster' disappears or transforms into something benign when confronted."
      },
      {
        q: "Does being chased mean I'm in actual danger?",
        a: "Rarely. Chase dreams almost always represent psychological threats rather than physical ones—emotions, responsibilities, or truths you're avoiding. They're metaphorical, not literal."
      },
      {
        q: "Why can't I run fast or scream in these dreams?",
        a: "Dream paralysis reflects your actual sense of powerlessness in waking life. You feel unable to effectively respond to your problems, hence the slow-motion running or silent screaming."
      }
    ],
    emotions: [
      {
        feeling: "terrified and panicked",
        meaning: "Whatever you're avoiding in waking life has reached critical levels and can no longer be ignored."
      },
      {
        feeling: "frustrated and exhausted",
        meaning: "You're tired of running from problems and ready for resolution, even if you don't know how."
      },
      {
        feeling: "exhilarated or excited",
        meaning: "The chase provides an adrenaline rush—you might be craving more excitement or challenges in life."
      },
      {
        feeling: "curious about the pursuer",
        meaning: "You're ready to understand what you've been avoiding—a sign of psychological readiness for growth."
      }
    ],
    context: [
      { item: "Chased in the Dark", meaning: "You're fleeing from unconscious fears or unknown aspects of yourself." },
      { item: "Chased in Daylight", meaning: "The threat is visible and known—you're consciously aware of what you're avoiding." },
      { item: "Hiding vs. Running", meaning: "Hiding indicates passive avoidance; running shows active flight from problems." },
      { item: "Others Being Chased With You", meaning: "Shared fears or collective avoidance—the issue affects your social group or family." }
    ],
    finalQuote: "Chase dreams are your psyche's way of saying 'stop running.' The pursuer isn't trying to harm you—it's trying to deliver a message you need to hear. When you finally turn around and face what's chasing you, you often discover it wasn't as terrifying as you imagined. The real horror is in the running, not the confrontation."
  },

  4: {
    title: "What Does It Mean to Dream About Falling?",
    category: "Common Symbols",
    date: "Nov 26, 2025",
    readTime: "6 min read",
    quickAnswer: "Dreaming about falling typically represents loss of control, insecurity, or fear of failure. It symbolizes anxiety about life situations spiraling downward, feeling unsupported, or lacking stability. The dream often reflects overwhelming stress or fear that you can't maintain your current position in life.",
    scenarios: [
      {
        title: "Falling from a Building or Cliff",
        meaning: "Major loss of status, security, or achievement. The height represents how far you have to fall—greater heights indicate more at stake. This often occurs when facing potential job loss, relationship ending, or reputation damage."
      },
      {
        title: "Falling into Water",
        meaning: "Diving into emotions or the unconscious mind. Unlike typical falling, this can be positive—surrendering to feelings or allowing yourself to explore depths you usually avoid. The water's condition (calm/turbulent) matters."
      },
      {
        title: "Endless Falling",
        meaning: "Perpetual anxiety without resolution. You feel like problems have no bottom—just continuous descent into worse situations. This reflects chronic stress or depression where improvement seems impossible."
      },
      {
        title: "Falling and Waking Before Impact",
        meaning: "This is a myth—you won't die if you hit bottom. Waking before impact simply means your brain recognized the simulation as unrealistic. If you do hit bottom, it often represents finally confronting your worst fears."
      },
      {
        title: "Falling in Slow Motion",
        meaning: "You're aware of your decline but feel powerless to stop it. Slow-motion falling suggests watching yourself make mistakes or sink into problems with horrifying clarity but no ability to prevent it."
      },
      {
        title: "Someone Else Falling",
        meaning: "Helplessness watching someone you care about fail or suffer. You feel responsible but unable to save them. Alternatively, it represents aspects of yourself you're objectifying or distancing from."
      },
      {
        title: "Falling Then Flying",
        meaning: "Transformation from loss of control to empowerment. The fall becomes a launch—you discover hidden capabilities. This positive variation suggests that what feels like failure might lead to liberation."
      },
      {
        title: "Falling Through the Floor",
        meaning: "Loss of foundation or support system. The ground beneath you (relationships, job, beliefs) is no longer stable. You're questioning fundamental aspects of your life structure."
      }
    ],
    positive: [
      "Letting go of control",
      "Humility and grounding",
      "Releasing perfectionism",
      "Surrendering to process",
      "Accepting vulnerability",
      "Trust in resilience"
    ],
    negative: [
      "Loss of control",
      "Insecurity and instability",
      "Fear of failure",
      "Lack of support",
      "Overwhelming anxiety",
      "Falling standards"
    ],
    lifeInsights: [
      {
        area: "For Your Career",
        text: "You're experiencing or fearing a professional setback. Falling dreams often accompany job insecurity, failed projects, or imposter syndrome. They reflect anxiety about maintaining your current position."
      },
      {
        area: "For Your Relationships",
        text: "The foundation of a key relationship feels unstable. You fear the connection is deteriorating or worry you can't maintain the relationship's current level. Trust issues may be emerging."
      },
      {
        area: "For Your Self-Worth",
        text: "You're questioning whether you deserve your current success or position. Falling represents fear that you're a fraud about to be exposed or that you've risen above your true capability."
      }
    ],
    faqs: [
      {
        q: "Will I die if I hit the ground in a falling dream?",
        a: "No, this is a complete myth. Many people have hit the ground in falling dreams and survived (both in the dream and in real life). What happens after impact varies—some wake up, others continue the dream."
      },
      {
        q: "Why do falling dreams feel so physical?",
        a: "Your brain simulates the sensation of falling using your vestibular system, which controls balance. This is why you often physically jerk awake—your body briefly believes it's actually falling."
      },
      {
        q: "Do falling dreams predict actual falls or accidents?",
        a: "No. They're symbolic of psychological or emotional descent, not prophetic warnings. The 'fall' is metaphorical—falling in social status, emotional stability, or self-confidence."
      },
      {
        q: "What's the difference between falling and floating down?",
        a: "Floating down gently suggests controlled descent or acceptance of change. Rapid falling indicates loss of control and anxiety. The speed and your emotional response distinguish them."
      }
    ],
    emotions: [
      {
        feeling: "terrified and helpless",
        meaning: "You feel completely out of control in a major life situation and fear catastrophic consequences."
      },
      {
        feeling: "calm or accepting",
        meaning: "You're learning to surrender control and trust the process—a mature response to life's unpredictability."
      },
      {
        feeling: "exhilarated (like a roller coaster)",
        meaning: "You're embracing change and uncertainty as adventure rather than threat—a healthy perspective on risk."
      },
      {
        feeling: "resigned or depressed",
        meaning: "You've given up trying to maintain your position and feel defeated by circumstances."
      }
    ],
    context: [
      { item: "Falling Alone", meaning: "Isolated in your struggles—you feel no one understands or can help your situation." },
      { item: "Falling with Others", meaning: "Shared crisis or collective failure—everyone in your group faces the same descent." },
      { item: "Pushed vs. Slipped", meaning: "Pushed indicates external forces causing your fall; slipping suggests self-caused failure." },
      { item: "Grabbing for Support", meaning: "Desperate attempts to stop your decline—trying to hold onto what's slipping away." }
    ],
    finalQuote: "Falling dreams confront us with our deepest fear—losing control. But they also offer a profound lesson: you're more resilient than you imagine. Most of us never hit bottom in these dreams because, deep down, we know we'll survive the fall. When you do hit bottom, you discover it's not the end—it's simply ground to rebuild from. Sometimes, falling is the only way to find your footing."
  }
};

// Template function
function generateArticleHTML(data, keyword) {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title} - Dream Interpretation Guide</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
    rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Outfit', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
          },
          colors: {
            primary: '#818cf8',
            secondary: '#34d399',
            dark: '#0f172a',
            midnight: '#1e1b4b',
          }
        }
      }
    }
  </script>
  <style>
    body {
      background: linear-gradient(to bottom right, #0f172a, #1e1b4b, #312e81);
      min-height: 100vh;
    }

    .glass-nav {
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .article-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }

    .article-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(129, 140, 248, 0.3);
      box-shadow: 0 0 20px rgba(129, 140, 248, 0.2);
    }

    details summary::-webkit-details-marker {
      display: none;
    }
  </style>
</head>

<body class="text-gray-200 font-sans antialiased selection:bg-primary selection:text-white">

  <!-- Header -->
  <header class="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
    <div class="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">
      <a href="../index.html"
        class="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition font-serif">
        Dream<span class="text-primary">Guide</span>
      </a>
      <button id="menuBtn" class="md:hidden text-2xl text-white focus:outline-none">
        ☰
      </button>
      <nav id="menu" class="hidden md:flex items-center gap-8 text-base font-medium text-gray-300">
        <a href="../index.html"
          class="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">Home</a>
        <a href="../index.html#features"
          class="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">Features</a>
        <a href="#"
          class="text-primary hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">Articles</a>
        <a href="#"
          class="px-5 py-2.5 bg-primary/20 border border-primary/50 text-white rounded-full hover:bg-primary/40 transition-all shadow-[0_0_15px_rgba(129,140,248,0.3)] hover:shadow-[0_0_25px_rgba(129,140,248,0.5)] transform hover:-translate-y-0.5">Contact</a>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto pt-32 pb-20 px-6">
    <article class="glass-card p-8 md:p-12 rounded-3xl">
      <span
        class="inline-block py-1 px-3 rounded-full bg-indigo-900/30 text-indigo-300 text-sm font-semibold mb-4 border border-indigo-500/30 backdrop-blur-sm">
        ${data.category}
      </span>
      <h1 class="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight font-serif">${data.title}</h1>

      <div class="flex items-center gap-4 mb-10 text-gray-400 text-sm border-b border-white/10 pb-8">
        <span>By Dream Expert</span>
        <span>•</span>
        <span>${data.date}</span>
        <span>•</span>
        <span>${data.readTime}</span>
      </div>

      <div class="prose prose-lg prose-invert max-w-none">

        <!-- Quick Answer Summary -->
        <div class="bg-indigo-500/10 border border-indigo-500/30 p-6 rounded-xl mb-8 backdrop-blur-sm hover:bg-indigo-500/15 transition-all">
          <h3 class="text-lg font-bold text-indigo-300 mb-3 flex items-center">
            <span class="mr-2">⚡</span> Quick Answer
          </h3>
          <p class="text-gray-300 leading-relaxed">
            ${data.quickAnswer}
          </p>
        </div>

        <!-- Common Scenarios -->
        <h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">Common Scenarios & Their Meanings</h2>

        <div class="space-y-6">
          ${data.scenarios.map(s => `
          <div class="article-card p-6 rounded-xl">
            <h3 class="font-bold text-lg text-white mb-3">${s.title}</h3>
            <p class="text-gray-300 leading-relaxed"><strong class="text-primary">Meaning:</strong> ${s.meaning}</p>
          </div>`).join('\n')}
        </div>

        <!-- Positive vs Negative Meanings -->
        <h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">Positive vs. Negative Meanings</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl backdrop-blur-sm">
            <h4 class="font-bold text-emerald-300 mb-4 text-lg flex items-center">
              <span class="mr-2">✅</span> Positive Meanings
            </h4>
            <ul class="list-disc pl-5 space-y-2 text-emerald-200/90">
              ${data.positive.map(p => `<li>${p}</li>`).join('\n              ')}
            </ul>
          </div>
          <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-xl backdrop-blur-sm">
            <h4 class="font-bold text-red-300 mb-4 text-lg flex items-center">
              <span class="mr-2">❌</span> Negative Meanings
            </h4>
            <ul class="list-disc pl-5 space-y-2 text-red-200/90">
              ${data.negative.map(n => `<li>${n}</li>`).join('\n              ')}
            </ul>
          </div>
        </div>

        <!-- What This Dream Says About Your Life -->
        <h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">What This Dream Says About Your Life</h2>
        ${data.lifeInsights.map(insight => `
        <p class="mb-4 text-gray-300 leading-relaxed">
          <strong class="text-primary">${insight.area}:</strong> ${insight.text}
        </p>`).join('\n')}

        <!-- Common Questions -->
        <h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">Common Questions</h2>
        <div class="space-y-4">
          ${data.faqs.map(faq => `
          <details class="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-slate-800/70 transition-all">
            <summary class="font-bold text-white cursor-pointer flex justify-between items-center">
              ${faq.q}
              <span class="text-primary group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p class="mt-3 text-gray-300 leading-relaxed">${faq.a}</p>
          </details>`).join('\n')}
        </div>

        <!-- Meaning by Emotions -->
        <h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">Meaning by Emotions</h2>
        <ul class="space-y-3 text-gray-300 leading-relaxed">
          ${data.emotions.map(e => `<li><strong class="text-primary">If the dream felt ${e.feeling}:</strong> ${e.meaning}</li>`).join('\n          ')}
        </ul>

        <!-- Meaning by Context -->
        <h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">Meaning by Context</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${data.context.map(c => `
          <div class="article-card p-5 rounded-xl">
            <div class="font-bold text-white mb-2">${c.item}</div>
            <div class="text-sm text-gray-300 leading-relaxed">${c.meaning}</div>
          </div>`).join('\n')}
        </div>

        <!-- Final Interpretation Summary -->
        <div
          class="mt-12 p-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl backdrop-blur-sm text-center">
          <h3 class="text-2xl font-bold text-white mb-4 font-serif flex items-center justify-center">
            <span class="mr-2">🌟</span> Final Interpretation
          </h3>
          <p class="text-gray-200 text-lg leading-relaxed italic">
            ${data.finalQuote}
          </p>
        </div>

      </div>

      <div class="my-12 text-center">
        <div
          class="bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-gray-400 font-medium hover:bg-slate-800/70 transition-all">
          AdSense Ad Space
        </div>
      </div>
    </article>
  </main>

  <footer class="bg-slate-900/50 backdrop-blur-lg border-t border-white/5 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-2">
          <a href="../index.html" class="text-2xl font-bold text-white mb-4 inline-block font-serif">Dream<span
              class="text-primary">Guide</span></a>
          <p class="text-gray-400 max-w-sm">
            Your daily companion for understanding the hidden messages in your dreams. Start your journey of
            self-discovery today.
          </p>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4 font-serif">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="../index.html" class="hover:text-primary transition">Home</a></li>
            <li><a href="../index.html#features" class="hover:text-primary transition">Features</a></li>
            <li><a href="#" class="hover:text-primary transition">Articles</a></li>
            <li><a href="#" class="hover:text-primary transition">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4 font-serif">Legal</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary transition">Terms of Service</a></li>
            <li><a href="#" class="hover:text-primary transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
        © 2025 Dream Interpretation Guide · All rights reserved.
      </div>
    </div>
  </footer>

  <script>
    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {
      menuBtn.onclick = () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        menu.classList.toggle("flex-col");
        menu.classList.toggle("absolute");
        menu.classList.toggle("top-16");
        menu.classList.toggle("left-0");
        menu.classList.toggle("w-full");
        menu.classList.toggle("bg-slate-900");
        menu.classList.toggle("p-4");
        menu.classList.toggle("shadow-lg");
      };
    }
  </script>
</body>

</html>`;
}

// Generate files
Object.keys(articles).forEach(keyword => {
  const html = generateArticleHTML(articles[keyword], keyword);
  const filePath = path.join(__dirname, 'pages', `keyword-${keyword}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✅ Created keyword-${keyword}.html`);
});

console.log('\n🎉 All articles generated successfully!');
