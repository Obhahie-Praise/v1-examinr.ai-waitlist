import React from "react";

export function VisionPaper() {
  return (
    <article className="flex flex-col gap-8 max-w-[650px] mx-auto text-white-text/90 font-primary">
      {/* Header */}
      <header className="flex flex-col gap-6 mb-8 border-b border-white/[0.08] pb-12">
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-white-text">
          Building the Future of Confident Learning
        </h1>
        <h2 className="text-xl md:text-2xl text-white-text/70 leading-snug">
          The Vision, Philosophy, and Product Direction Behind Examinr.ai
        </h2>
        <div className="flex flex-col gap-1 text-sm md:text-base text-white-text/50 mt-4">
          <p>Author: Praise</p>
          <p>Project: Examinr.ai</p>
          <p>Status: Vision Paper — Pre-Release</p>
          <p>Expected Public Release: Early 2027</p>
        </div>
      </header>

      {/* Abstract */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">Abstract</h3>
        <p className="leading-relaxed">
          Examinr.ai began with a simple frustration: preparing for examinations often feels harder than learning itself.
        </p>
        <p className="leading-relaxed">
          Students are expected to work through scattered notes, past questions, unpredictable examination patterns, and an ever-growing collection of resources while trying to figure out what actually deserves their attention. At the same time, modern AI can explain almost anything, but generic AI assistants rarely understand the context in which a student is learning, the resources their institution trusts, or the patterns that matter most in their examinations.
        </p>
        <p className="leading-relaxed">
          I wanted to build the platform I wished I had.
        </p>
        <p className="leading-relaxed">
          Examinr.ai is being developed as an intelligent learning workspace designed around predictive intelligence, trusted educational resources, and personalised study. Its purpose is not simply to give students another chatbot. It is to help students understand what to study, why it matters, and how to prepare with greater confidence.
        </p>
        <p className="leading-relaxed">
          This paper presents the motivation behind Examinr.ai, the people it is designed to serve, the planned first version, the role of its beta programme, its approach to pricing, and the principles that will guide its development beyond launch.
        </p>
        <p className="leading-relaxed italic text-white-text/60 mt-2">
          Keywords: Examinr.ai, predictive learning, artificial intelligence, examination preparation, education technology, personalised learning, educational resources
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 1. Introduction */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">1. Introduction</h3>
        <p className="leading-relaxed">
          I have spent enough time as a student preparing for examinations to understand how fragmented the process can become.
        </p>
        <p className="leading-relaxed">
          Notes live in different places. Past questions are scattered. Some resources are useful while others are outdated or irrelevant. Examination patterns are often difficult to recognise until it is too late. Students spend hours revising everything because they do not know what deserves the most attention.
        </p>
        <p className="leading-relaxed">
          The problem is not always a lack of effort.
        </p>
        <p className="leading-relaxed">
          Sometimes, students are simply given too little direction.
        </p>
        <p className="leading-relaxed">
          This was the beginning of Examinr.ai.
        </p>
        <p className="leading-relaxed">
          The idea was not born from wanting to build another AI application. It came from wanting to build something that could make the process of preparing for examinations feel more understandable, more intentional, and ultimately more confident.
        </p>
        <p className="leading-relaxed">
          The central question became:
        </p>
        <p className="leading-relaxed italic font-medium text-white-text">
          What if technology could help students stop studying everything and start studying what matters?
        </p>
        <p className="leading-relaxed">
          Examinr.ai is my attempt to explore that question.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 2. Why Examinr.ai Was Conceived */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">2. Why Examinr.ai Was Conceived</h3>
        <p className="leading-relaxed">
          I became increasingly frustrated by the gap between the tools students have and the way students actually learn.
        </p>
        <p className="leading-relaxed">
          Traditional educational software often focuses on delivering content. Generic AI focuses on answering questions. Neither necessarily understands the complete learning context surrounding a student.
        </p>
        <p className="leading-relaxed">
          A student may ask an AI assistant to explain a topic, but that assistant may not know that the topic appears repeatedly in their examinations.
        </p>
        <p className="leading-relaxed">
          A school may have excellent study materials, but those resources may exist independently from the student&apos;s examination preparation.
        </p>
        <p className="leading-relaxed">
          A student may have years of past questions, but identifying patterns across them manually is tedious and time-consuming.
        </p>
        <p className="leading-relaxed">
          Examinr.ai was conceived around connecting these pieces.
        </p>
        <p className="leading-relaxed">
          The product is intended to combine examination patterns, trusted resources, AI assistance, and student learning activity into one environment.
        </p>
        <p className="leading-relaxed">
          The objective is not to make students dependent on AI.
        </p>
        <p className="leading-relaxed">
          The objective is to give them better direction.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 3. Who Examinr.ai Is For */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">3. Who Examinr.ai Is For</h3>
        <p className="leading-relaxed">
          Examinr.ai is being designed as a shared learning ecosystem rather than a product for only one type of user.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">3.1 Students</h4>
        <p className="leading-relaxed">
          Students are the primary beneficiaries.
        </p>
        <p className="leading-relaxed">
          The platform is designed to help them:
        </p>
        <ul className="list-disc list-outside pl-5 flex flex-col gap-2 leading-relaxed text-white-text/80">
          <li>identify important examination patterns;</li>
          <li>understand difficult topics;</li>
          <li>practise with relevant questions;</li>
          <li>generate study materials;</li>
          <li>organise trusted resources;</li>
          <li>understand their learning gaps;</li>
          <li>and approach preparation with greater confidence.</li>
        </ul>
        <p className="leading-relaxed mt-2">
          The intended experience is not simply ask a question and receive an answer.
        </p>
        <p className="leading-relaxed">
          It is:
        </p>
        <p className="leading-relaxed italic font-medium text-white-text">
          Understand where you are, understand where you need to go, and receive the tools to get there.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-6">3.2 Teachers and Educators</h4>
        <p className="leading-relaxed">
          Teachers can contribute trusted resources, create assessments, and help shape the learning environment surrounding their students.
        </p>
        <p className="leading-relaxed">
          The long-term goal is to give educators better tools for understanding what their students struggle with while reducing repetitive administrative work.
        </p>

        <h4 className="font-display text-xl md:text-2xl text-white-text mt-6">3.3 Schools and Institutions</h4>
        <p className="leading-relaxed">
          Institutions should be able to provide their students with trusted educational materials, manage examinations, and participate in a shared learning ecosystem.
        </p>
        <p className="leading-relaxed">
          Instead of every institution operating as an isolated island of information, Examinr.ai aims to create infrastructure through which institutions can contribute to and benefit from a broader educational network.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 4. The V1 Vision */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">4. The V1 Vision</h3>
        <p className="leading-relaxed">
          The first version of Examinr.ai is intentionally focused.
        </p>
        <p className="leading-relaxed">
          It does not need to solve every problem in education.
        </p>
        <p className="leading-relaxed">
          It needs to prove that the central idea works.
        </p>
        <p className="leading-relaxed">
          V1 is planned around a learning workspace where students can interact with Examinr.ai, access learning resources, practise, analyse their performance, and prepare for examinations from a single environment.
        </p>
        <p className="leading-relaxed">
          Core capabilities are planned around:
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">AI Study Workspace</h4>
        <p className="leading-relaxed">
          A conversational environment where students can interact with Examinr.ai while studying.
        </p>
        <p className="leading-relaxed">
          The AI should be capable of helping students understand concepts, work through questions, and interact with their learning materials without turning the entire product into a generic chatbot.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Predictive Examination Intelligence</h4>
        <p className="leading-relaxed">
          Examinr.ai will analyse available examination data and patterns to help identify topics and areas that deserve attention.
        </p>
        <p className="leading-relaxed">
          The purpose is not to promise that an AI can magically predict an examination question.
        </p>
        <p className="leading-relaxed">
          The purpose is to turn historical information into useful preparation signals.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Learning Resources</h4>
        <p className="leading-relaxed">
          Students should be able to access trusted learning materials from their institution and other supported sources.
        </p>
        <p className="leading-relaxed">
          Resources should not simply be collected. They should be connected to the learning experience.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Practice and Assessment</h4>
        <p className="leading-relaxed">
          Examinr.ai is intended to support quizzes, examination practice, online assessments, and other forms of active learning.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Performance and Learning Insights</h4>
        <p className="leading-relaxed">
          Students should eventually be able to understand their strengths, weaknesses, progress, and recurring difficulties rather than relying entirely on intuition.
        </p>
        
        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Institutional Infrastructure</h4>
        <p className="leading-relaxed">
          Institutions should have mechanisms for managing resources, assessments, and the academic context that makes Examinr.ai more useful than a generic AI assistant.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 5. The Beta */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">5. The Beta: Building With Students, Not Just For Them</h3>
        <p className="leading-relaxed">
          The beta will be one of the most important stages of Examinr.ai&apos;s development.
        </p>
        <p className="leading-relaxed">
          The beta is not simply a smaller version of the finished product.
        </p>
        <p className="leading-relaxed">
          It is an experiment.
        </p>
        <p className="leading-relaxed">
          Early users will interact with features that are still being refined, and their behaviour, feedback, frustrations, and suggestions will influence what Examinr.ai becomes.
        </p>
        <p className="leading-relaxed">
          This is important because there are things that cannot be discovered from a design file or a development environment.
        </p>
        <p className="leading-relaxed">
          A feature may appear useful but create unnecessary friction.
        </p>
        <p className="leading-relaxed">
          A workflow may look obvious to its creator but confuse a student.
        </p>
        <p className="leading-relaxed">
          A prediction may technically work but fail to communicate its confidence appropriately.
        </p>
        <p className="leading-relaxed">
          A resource system may be powerful but become overwhelming.
        </p>
        <p className="leading-relaxed">
          The beta gives us the opportunity to discover these problems before they become permanent assumptions.
        </p>

        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">What We Will Learn</h4>
        <p className="leading-relaxed">
          The beta will help answer questions such as:
        </p>
        <ul className="list-disc list-outside pl-5 flex flex-col gap-2 leading-relaxed text-white-text/80">
          <li>Which features do students actually return to?</li>
          <li>Which parts of preparation create the most friction?</li>
          <li>Does predictive intelligence genuinely improve study decisions?</li>
          <li>Which resources are most useful?</li>
          <li>Where does AI help, and where does it become unnecessary?</li>
          <li>What should be simplified?</li>
          <li>What should be expanded?</li>
          <li>What do institutions actually need?</li>
          <li>What do students wish Examinr.ai could do that it currently cannot?</li>
        </ul>
        <p className="leading-relaxed mt-2">
          The answers will directly influence the product roadmap.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 6. Feedback as a Product Mechanism */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">6. Feedback as a Product Mechanism</h3>
        <p className="leading-relaxed">
          One of the principles behind Examinr.ai is that the product should not be designed entirely from assumptions made by its creators.
        </p>
        <p className="leading-relaxed">
          The beta therefore becomes part of the product-development system itself.
        </p>
        <p className="leading-relaxed">
          Feedback will influence:
        </p>
        <p className="leading-relaxed font-medium text-white-text">
          User experience → Features → AI behaviour → Resource systems → Institutional tools → Pricing → Future releases
        </p>
        <p className="leading-relaxed">
          This means the first public version is not the final definition of Examinr.ai.
        </p>
        <p className="leading-relaxed">
          It is the first tested expression of the idea.
        </p>
        <p className="leading-relaxed">
          If users consistently struggle with something, it should be reconsidered.
        </p>
        <p className="leading-relaxed">
          If a feature is rarely used, its purpose should be questioned.
        </p>
        <p className="leading-relaxed">
          If students discover a better way to prepare, the platform should adapt.
        </p>
        <p className="leading-relaxed">
          The long-term product should be shaped by evidence as much as by vision.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 7. Pricing Philosophy */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">7. Pricing Philosophy</h3>
        <p className="leading-relaxed">
          Examinr.ai is intended to become a sustainable product rather than a permanently free experiment.
        </p>
        <p className="leading-relaxed">
          However, monetisation should never undermine the reason the product exists.
        </p>
        <p className="leading-relaxed">
          The long-term model is expected to have two major sides.
        </p>

        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Individual Access</h4>
        <p className="leading-relaxed">
          Students should be able to use Examinr.ai at an accessible entry level, with additional capabilities available through a premium offering.
        </p>
        <p className="leading-relaxed">
          The individual model allows students who discover Examinr.ai independently to benefit from the platform without requiring their school to adopt it first.
        </p>

        <h4 className="font-display text-xl md:text-2xl text-white-text mt-4">Institutional Access</h4>
        <p className="leading-relaxed">
          Institutions represent a major part of the long-term business model.
        </p>
        <p className="leading-relaxed">
          Schools and educational organisations can benefit from institution-level capabilities, trusted resource management, assessment infrastructure, analytics, and tools that would not make sense as individual student features.
        </p>
        <p className="leading-relaxed">
          This is important to the overall vision:
        </p>
        <p className="leading-relaxed italic font-medium text-white-text">
          The student should not have to carry the entire cost of improving the learning environment.
        </p>
        <p className="leading-relaxed">
          A sustainable institution-focused model can allow Examinr.ai to remain useful to students while giving schools a reason to invest in the infrastructure surrounding them.
        </p>
        <p className="leading-relaxed">
          Pricing will therefore be shaped around value, accessibility, sustainability, and the actual needs discovered during beta testing rather than arbitrary feature restrictions.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 8. What Examinr.ai Should Not Become */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">8. What Examinr.ai Should Not Become</h3>
        <p className="leading-relaxed">
          Defining what a product should not become is just as important as defining what it should become.
        </p>
        <p className="leading-relaxed">
          Examinr.ai should not become another chatbot with an education-themed interface.
        </p>
        <p className="leading-relaxed">
          It should not encourage students to outsource their thinking.
        </p>
        <p className="leading-relaxed">
          It should not pretend that prediction is certainty.
        </p>
        <p className="leading-relaxed">
          It should not overwhelm students with unnecessary information simply because the platform is capable of generating it.
        </p>
        <p className="leading-relaxed">
          And it should not replace teachers, schools, or the process of learning.
        </p>
        <p className="leading-relaxed">
          AI should provide leverage.
        </p>
        <p className="leading-relaxed">
          The student should remain in control.
        </p>
        <p className="leading-relaxed">
          The teacher should remain valuable.
        </p>
        <p className="leading-relaxed">
          The institution should remain meaningful.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 9. The Long-Term Vision */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">9. The Long-Term Vision</h3>
        <p className="leading-relaxed">
          The ultimate vision extends beyond examination preparation.
        </p>
        <p className="leading-relaxed">
          Examinr.ai could become an intelligent learning layer connecting students, educators, institutions, examinations, and trusted educational resources.
        </p>
        <p className="leading-relaxed">
          In that future, a student&apos;s learning environment is not fragmented across dozens of unrelated tools.
        </p>
        <p className="leading-relaxed">
          Their resources understand their subjects.
        </p>
        <p className="leading-relaxed">
          Their practice understands their examinations.
        </p>
        <p className="leading-relaxed">
          Their learning history informs their recommendations.
        </p>
        <p className="leading-relaxed">
          Their institution can contribute trusted materials.
        </p>
        <p className="leading-relaxed">
          And AI can help connect all of those pieces.
        </p>
        <p className="leading-relaxed">
          The long-term opportunity is therefore not simply to build an AI tutor.
        </p>
        <p className="leading-relaxed">
          It is to build learning infrastructure that understands context.
        </p>
        <p className="leading-relaxed">
          That distinction matters.
        </p>
        <p className="leading-relaxed">
          The future of educational AI should not only be about models becoming more intelligent.
        </p>
        <p className="leading-relaxed">
          The surrounding systems must become more intelligent too.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 10. The Role of Design */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">10. The Role of Design</h3>
        <p className="leading-relaxed">
          Technology alone cannot create confidence.
        </p>
        <p className="leading-relaxed">
          The experience through which that technology is delivered matters.
        </p>
        <p className="leading-relaxed">
          Examinr.ai is therefore being designed around clarity, restraint, and intentional interaction.
        </p>
        <p className="leading-relaxed">
          The interface should make complex systems feel understandable.
        </p>
        <p className="leading-relaxed">
          Motion should communicate rather than distract.
        </p>
        <p className="leading-relaxed">
          Information should appear when it is useful.
        </p>
        <p className="leading-relaxed">
          The product should feel capable without feeling intimidating.
        </p>
        <p className="leading-relaxed">
          This is particularly important for students, who often approach examination preparation already carrying pressure and uncertainty.
        </p>
        <p className="leading-relaxed">
          A learning platform should not add unnecessary cognitive load.
        </p>
        <p className="leading-relaxed">
          It should reduce it.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 11. A Product Built From a Student's Perspective */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">11. A Product Built From a Student&apos;s Perspective</h3>
        <p className="leading-relaxed">
          At the centre of Examinr.ai is a very simple personal motivation.
        </p>
        <p className="leading-relaxed">
          I got tired of preparing for examinations with scattered notes, unpredictable questions, and AI tools that could explain almost anything but did not understand how students actually work.
        </p>
        <p className="leading-relaxed">
          So I started building the platform I wished I had.
        </p>
        <p className="leading-relaxed">
          That perspective will remain important even as Examinr.ai grows.
        </p>
        <p className="leading-relaxed">
          It is easy for a product to become disconnected from the person it was originally built to help.
        </p>
        <p className="leading-relaxed">
          The challenge will be to grow the platform without losing that original empathy.
        </p>
        <p className="leading-relaxed">
          Every new feature should ultimately answer a question:
        </p>
        <p className="leading-relaxed italic font-medium text-white-text">
          Does this make learning clearer, more directed, or more effective for the person using it?
        </p>
        <p className="leading-relaxed">
          If it does not, it deserves to be questioned.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* 12. Conclusion */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-white-text">12. Conclusion</h3>
        <p className="leading-relaxed">
          Examinr.ai is still being built.
        </p>
        <p className="leading-relaxed">
          That is important.
        </p>
        <p className="leading-relaxed">
          The product described in this paper is a direction, not a claim that every problem has already been solved.
        </p>
        <p className="leading-relaxed">
          The first version will test the core idea.
        </p>
        <p className="leading-relaxed">
          The beta will challenge our assumptions.
        </p>
        <p className="leading-relaxed">
          Students and institutions will tell us what works.
        </p>
        <p className="leading-relaxed">
          Their feedback will determine what changes.
        </p>
        <p className="leading-relaxed">
          And those changes will shape the product that eventually emerges.
        </p>
        <p className="leading-relaxed">
          The goal is not to build the most complicated education platform.
        </p>
        <p className="leading-relaxed">
          It is to build something genuinely useful.
        </p>
        <p className="leading-relaxed">
          Something that helps a student look at an examination and feel less like they are guessing where to begin.
        </p>
        <p className="leading-relaxed">
          Something that helps educators understand their students better.
        </p>
        <p className="leading-relaxed">
          Something that allows institutions to contribute meaningfully to the learning process.
        </p>
        <p className="leading-relaxed">
          And, ultimately, something that helps students study with greater direction and confidence.
        </p>
        <p className="leading-relaxed">
          That is the future I am trying to build with Examinr.ai.
        </p>
        <p className="leading-relaxed">
          Not a replacement for learning.
        </p>
        <p className="leading-relaxed">
          Not another chatbot.
        </p>
        <p className="leading-relaxed font-medium text-white-text">
          A better way to prepare for what comes next.
        </p>
      </section>

      <hr className="border-white/[0.08] my-8" />

      {/* Author's Note */}
      <section className="flex flex-col gap-4 mb-20">
        <h3 className="font-display text-xl md:text-2xl text-white-text">Author&apos;s Note</h3>
        <p className="leading-relaxed">
          This paper describes the intended direction of Examinr.ai at its pre-release stage. Product capabilities, pricing structures, and institutional programmes may change as development and beta testing provide new evidence.
        </p>
        <p className="leading-relaxed">
          The vision, however, remains simple:
        </p>
        <p className="leading-relaxed italic font-medium text-white-text">
          Build technology that helps students understand not only what they can learn, but what matters most to learn next.
        </p>
      </section>
    </article>
  );
}
