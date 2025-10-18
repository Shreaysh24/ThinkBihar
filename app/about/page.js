"use client";

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 font-[Noto_Serif_Devanagari]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            थिंक बिहार रिसर्च फाउंडेशन
          </h1>
          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            “Think and Act for Bihar” — बिहार की गरिमा और विकास की पुनर्स्थापना की दिशा में एक सशक्त पहल।
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-20 bg-white rounded-3xl shadow-md p-10 border-l-4 border-primary">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2">
            परिचय
          </h2>
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              <strong>थिंक बिहार रिसर्च फाउंडेशन, पटना</strong> एक गैर-सरकारी एवं गैर-लाभकारी संस्था है, 
              जिसकी स्थापना <strong>19 अगस्त 2025</strong> को की गई। यह संस्था 
              <strong>कंपनी अधिनियम 2013 (धारा 8)</strong> के अंतर्गत पंजीकृत है।
            </p>
            <p>
              इसका उद्देश्य बिहार की गरिमा को पुनर्स्थापित करना और “विकसित बिहार” की संकल्पना को साकार करना है।
              भारत के विकास में बिहार की भूमिका ऐतिहासिक रूप से अत्यंत महत्वपूर्ण रही है।
              यह भूमि ज्ञान-विज्ञान, संस्कृति और सभ्यता की जननी रही है।
            </p>
            <p>
              नालंदा और विक्रमशिला जैसे विश्वविख्यात विश्वविद्यालयों से लेकर
              लिच्छवी गणराज्य, मौर्य साम्राज्य, बुद्ध, महावीर और गांधी तक — 
              यह भूमि सदैव नेतृत्व और परिवर्तन का केंद्र रही है।
            </p>
            <p>
              स्वतंत्रता के बाद बिहार अनुसंधान और नीति-आधारित विकास में पिछड़ गया।
              इसी कमी को पूरा करने के लिए “थिंक बिहार रिसर्च फाउंडेशन” का गठन किया गया, 
              जो अनुसंधान आधारित नीतियों के माध्यम से बिहार के पुनर्निर्माण की दिशा में कार्यरत है।
            </p>
            <p>
              यह संस्था शिक्षाविदों, प्रोफेसरों, शोधकर्ताओं, चिकित्सकों, कलाकारों, वैज्ञानिकों,
              तकनीकी विशेषज्ञों, पत्रकारों और चिंतकों को एक मंच पर जोड़कर 
              “विकसित बिहार, समृद्ध बिहार” के लक्ष्य को साकार करने हेतु निरंतर प्रयासरत है।
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-20 bg-white rounded-3xl shadow-md p-10 border-l-4 border-secondary">
          <h2 className="text-3xl font-bold text-secondary mb-8 border-b pb-2">
            मुख्य कार्यक्षेत्र
          </h2>
          <ul className="list-decimal list-inside space-y-3 text-lg text-gray-800 leading-relaxed">
            <li>बिहार अध्ययन केन्द्रों के माध्यम से विश्वविद्यालयों एवं महाविद्यालयों में अकादमिक संवाद और संगोष्ठियों का आयोजन।</li>
            <li>बिहार के विभूतियों की जयंती पर कार्यक्रमों का आयोजन।</li>
            <li>कला, संस्कृति और भाषाओं के संरक्षण एवं प्रोत्साहन हेतु कार्य।</li>
            <li>बिहार के पर्यटन उद्योग को बढ़ावा देने के लिए योजनाएँ।</li>
            <li>नीतिगत शोध और विकासपरक रिपोर्ट तैयार करना।</li>
            <li>युवाओं के कौशल विकास हेतु प्रशिक्षण कार्यक्रम।</li>
            <li>शिक्षा में गुणात्मक सुधार के लिए सतत प्रयास।</li>
            <li>सामाजिक समरसता एवं जातिवाद के उन्मूलन के लिए अभियान।</li>
            <li>आर्थिक विकास हेतु अनुसंधान-आधारित नीतिगत परिवर्तन।</li>
            <li>बिहार की समृद्ध विरासत और खोई हुई गरिमा की पुनर्स्थापना हेतु विमर्श को आगे बढ़ाना।</li>
          </ul>
        </section>

        {/* Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
              🌾
            </div>
            <h3 className="text-2xl font-semibold mb-2">गौरव</h3>
            <p className="text-gray-700 text-lg">
              बिहार की ऐतिहासिक और सांस्कृतिक गरिमा को पुनः स्थापित करना।
            </p>
          </div>

          <div className="text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <div className="bg-secondary text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
              🤝
            </div>
            <h3 className="text-2xl font-semibold mb-2">सहयोग</h3>
            <p className="text-gray-700 text-lg">
              शिक्षाविदों, विशेषज्ञों और समाज के विभिन्न वर्गों को एक मंच पर जोड़ना।
            </p>
          </div>

          <div className="text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <div className="bg-accent text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
              🚀
            </div>
            <h3 className="text-2xl font-semibold mb-2">विकास</h3>
            <p className="text-gray-700 text-lg">
              अनुसंधान, शिक्षा और कौशल विकास के माध्यम से आत्मनिर्भर बिहार का निर्माण।
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
