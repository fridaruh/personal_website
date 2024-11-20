import React from 'react';

export default function Testimonials() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/87e4be60-8890-497a-b019-3f6bb81a6267/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-10 bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">What People Say</h2>
        <div className="senja-embed" data-id="87e4be60-8890-497a-b019-3f6bb81a6267" data-mode="shadow" data-lazyload="false" style={{ display: 'block' }}></div>
      </div>
    </section>
  );
}