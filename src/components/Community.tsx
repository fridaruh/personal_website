import React from 'react';

export default function Community() {
  return (
    <section id="community" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Join my community</h2>
        <div className="max-w-3xl mx-auto">
          <iframe 
            title="AI_THE_NEW_SEXY checkout widget" 
            src="https://nas.io/checkout-widget?communityCode=AI_THE_NEW_SEXY&communitySlug=%2Fai-the-new-sexy-com&buttonText=Se%20uni%C3%B3%20como%20miembro&buttonTextColorHex=%23000&buttonBgColorHex=%23fccb1d&widgetTheme=light&backgroundColorHex=%23fff" 
            width="100%" 
            height="320" 
            frameBorder="0" 
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>
    </section>
  );
}