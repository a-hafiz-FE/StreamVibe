import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    debug: true,
    fallbacklng: "en",
    resources: {
        en: {
            translation: {
                home: "Home",
                MoviesShows: "Movies & Shows",
                Support: "Support",
                Subscriptions: "Subscriptions",
                "The Best Streaming Experience": "The Best Streaming Experience",
                mainDesc: "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.",
                mainDesc1: "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.",
                "Start Watching Now": "Start Watching Now",
                categoriesTitle: "Explore our wide variety of categories",
                categoriesDesc: "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new",
                Action: "Action",
                Adventure: "Adventure",
                Comedy: "Comedy",
                Drama: "Drama",
                Horror: "Horror",
                deviceDesc: "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.",
                deviceDesc1: "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.",
                deviceTitle: "We Provide you streaming experience across various devices.",
                Smartphones: "Smartphones",
                Tablet: "Tablet",
                SmartTV: "Smart TV",
                Laptops: "Laptops",
                GamingConsoles: "Gaming Consoles",
                VRHeadsets: "VR Headsets",
                qTitle: "Frequently Asked Questions",
                qDesc: "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",
                AskaQuestion: "Ask a Question",
                NoAnswerAvailableYet: "No Answer Available Yet",
                a1: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
                q1: "What is StreamVibe?",
                q2: "How much does StreamVibe cost?",
                q3: "What content is available on StreamVibe?",
                q4: "How can I watch StreamVibe?",
                q5: "How do I sign up for StreamVibe?",
                q6: "What is the StreamVibe free trial?",
                q7: "How do I contact StreamVibe customer support?",
                q8: "What are the StreamVibe payment methods?",

            }
        },
        ar: {
            translation: {
                home: "الرئيسية",
                MoviesShows: "البرامج و الافلام",
                Support: "الدعم",
                Subscriptions: "الاشتراكات",
                "The Best Streaming Experience": "أفضل تجربة بث مباشر",
                mainDesc: '"ستريم ڤايب" (StreamVibe) هي أفضل تجربة بث لمشاهدة أفلامك وعروضك المفضلة عند الطلب، في أي وقت ومن أي مكان. مع "ستريم ڤايب"، يمكنك الاستمتاع بمجموعة واسعة من المحتوى، بما في ذلك أحدث الأفلام الرائجة، الأفلام الكلاسيكية، المسلسلات التلفزيونية الشهيرة، والمزيد. يمكنك أيضاً إنشاء قوائم المشاهدة الخاصة بك، بحيث تتمكن من العثور بسهولة على المحتوى الذي ترغب في مشاهدته.',
                mainDesc1: '"ستريم ڤايب" هي أفضل تجربة بث لمشاهدة أفلامك وعروضك المفضلة عند الطلب، في أي وقت ومن أي مكان.',
                "Start Watching Now": "ابدأ المشاهدة الآن",
                categoriesTitle: "استكشف فئاتنا المتنوعة",
                categoriesDesc: "سواء كنت تبحث عن عمل كوميدي ليُضحكك، أو عمل درامي ليجعلك تتفكر، أو فيلم وثائقي لتتعلم شيئاً جديداً",
                Action: "أكشن",
                Adventure: "مغامرات",
                Comedy: "كوميديا",
                Drama: "دراما",
                Horror: "رعب",
                deviceDesc: 'مع "ستريم ڤايب"، يمكنك الاستمتاع بأفلامك وعروضك التلفزيونية المفضلة في أي وقت ومن أي مكان.',
                deviceDesc1: 'مع "ستريم ڤايب"، يمكنك الاستمتاع بأفلامك وعروضك التلفزيونية المفضلة في أي وقت ومن أي مكان. تم تصميم منصتنا لتكون متوافقة مع مجموعة واسعة من الأجهزة، مما يضمن أنك لن تفوت أي لحظة من الترفيه.',
                deviceTitle: 'نحن نوفر لك تجربة بث عبر أجهزة متنوعة.',
                Smartphones: "الهواتف الذكية",
                Tablet: "الجهاز اللوحي",
                SmartTV: "التلفزيونات الذكية",
                Laptops: "الحواسيب المحمولة",
                GamingConsoles: "أجهزة الألعاب",
                VRHeadsets: "نظارات الواقع الافتراضي",
                qTitle: "الأسئلة الشائعة",
                qDesc: 'هل لديك أسئلة؟ لدينا الإجابات!تفقّد قسم الأسئلة الشائعة لدينا للعثور على إجابات لأكثر الاستفسارات شيوعاً حول "ستريم ڤايب".',
                AskaQuestion: "اطرح سؤالاً",
                NoAnswerAvailableYet: "لا توجد إجابة متوفرة بعد",
                a1: '"ستريم ڤايب" هي خدمة بث تسمح لك بمشاهدة الأفلام والعروض عند الطلب.',
                q1: 'ما هي "ستريم ڤايب"؟',
                q2: 'كم تبلغ تكلفة "ستريم ڤايب"؟',
                q3: 'ما هو المحتوى المتوفر على "ستريم ڤايب"؟',
                q4: 'كيف يمكنني مشاهدة "ستريم ڤايب"؟',
                q5: 'كيف يمكنني الاشتراك في "ستريم ڤايب"؟',
                q6: 'ما هي الفترة التجريبية المجانية لـ "ستريم ڤايب"؟',
                q7: 'كيف أتواصل مع دعم عملاء "ستريم ڤايب"؟',
                q8: 'ما هي طرق الدفع المتاحة لـ "ستريم ڤايب"؟',
            }
        }
    }
})