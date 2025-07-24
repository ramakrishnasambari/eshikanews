export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  category: string;
  publishedAt: string;
  imageUrl: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Revolutionary AI Breakthrough Transforms Healthcare Industry',
    summary: 'A new artificial intelligence system has demonstrated unprecedented accuracy in early disease detection, potentially saving millions of lives worldwide.',
    content: `In a groundbreaking development that could revolutionize healthcare, researchers have unveiled a new artificial intelligence system capable of detecting diseases with unprecedented accuracy. The system, developed by a team of international scientists, has shown remarkable results in early detection of various conditions including cancer, heart disease, and neurological disorders.

The AI platform utilizes advanced machine learning algorithms combined with comprehensive medical databases to analyze patient data, medical images, and genetic information. Early trials have demonstrated accuracy rates exceeding 95% in disease detection, significantly outperforming traditional diagnostic methods.

"This represents a paradigm shift in how we approach healthcare," said Dr. Sarah Chen, lead researcher at the Medical AI Institute. "The system can identify patterns and correlations that human doctors might miss, leading to earlier intervention and better patient outcomes."

The technology has already been deployed in several major hospitals across the country, where it's being used to assist medical professionals in diagnosis and treatment planning. Healthcare providers report that the AI system has reduced diagnostic errors by 40% and improved patient outcomes significantly.

However, the implementation has also raised important questions about privacy, data security, and the role of AI in medical decision-making. Experts emphasize that the system is designed to augment, not replace, human medical expertise.

"The AI serves as a powerful tool for doctors, providing them with additional insights and analysis," explained Dr. Michael Rodriguez, a healthcare technology expert. "The final decisions about patient care remain in the hands of qualified medical professionals."

The development team is currently working on expanding the system's capabilities to include more disease types and improving its integration with existing medical infrastructure. They also plan to make the technology more accessible to smaller healthcare facilities and developing countries.

This breakthrough comes at a critical time when healthcare systems worldwide are facing increasing pressure to provide better care with limited resources. The AI system offers a promising solution that could help bridge this gap while improving the quality of care for patients everywhere.

Industry analysts predict that this technology could become standard in healthcare facilities within the next five years, potentially transforming how we approach disease prevention and treatment on a global scale.`,
    author: 'Dr. Emily Watson',
    category: 'technology',
    publishedAt: '2024-01-15T10:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
    readTime: 8,
    tags: ['AI', 'Healthcare', 'Technology', 'Medicine'],
    featured: true,
  },
  {
    id: '2',
    title: 'Global Markets Rally as Tech Giants Report Record Earnings',
    summary: 'Major technology companies exceeded quarterly expectations, driving global markets to new heights and boosting investor confidence.',
    content: `Global financial markets experienced a significant rally today as major technology companies reported exceptional quarterly earnings that exceeded analyst expectations. The surge in tech stocks propelled major indices to new record highs, with the S&P 500 and NASDAQ both posting substantial gains.

Leading the charge were tech giants including Apple, Microsoft, and Google's parent company Alphabet, all of which reported stronger-than-expected revenue and profit figures. The positive earnings reports came despite ongoing concerns about inflation, supply chain disruptions, and geopolitical tensions.

"These results demonstrate the resilience and adaptability of the technology sector," said financial analyst Jennifer Martinez. "Companies have successfully navigated challenging economic conditions while continuing to innovate and grow their market presence."

The strong performance was driven by several factors, including increased demand for cloud computing services, continued growth in digital advertising, and robust consumer spending on technology products. Companies also benefited from cost-cutting measures implemented during the previous year.

However, some analysts caution that the current rally may not be sustainable in the long term. "While these results are impressive, we need to consider the broader economic context," noted economist David Thompson. "Rising interest rates and potential regulatory changes could impact future growth."

The market rally has also had positive effects on retirement accounts and investment portfolios, with many individual investors seeing significant gains. Financial advisors recommend maintaining a diversified portfolio despite the strong performance of tech stocks.

Looking ahead, market watchers are closely monitoring upcoming economic data releases and Federal Reserve policy decisions, which could influence market direction in the coming months.`,
    author: 'Michael Chen',
    category: 'business',
    publishedAt: '2024-01-14T16:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['Markets', 'Technology', 'Earnings', 'Finance'],
    featured: true,
  },
  {
    id: '3',
    title: 'Historic Climate Agreement Reached at Global Summit',
    summary: 'World leaders have agreed on ambitious new targets to combat climate change, marking a significant step forward in international environmental cooperation.',
    content: `In a historic moment for global environmental policy, world leaders have reached a landmark agreement on climate change at the annual Global Climate Summit. The new accord, signed by representatives from over 190 countries, sets ambitious targets for reducing greenhouse gas emissions and transitioning to renewable energy sources.

The agreement represents a significant breakthrough in international cooperation on climate issues, with developed nations committing to substantial financial support for developing countries' climate initiatives. The deal includes provisions for technology transfer, capacity building, and financial assistance to help poorer nations meet their environmental goals.

"This agreement marks a turning point in our collective response to the climate crisis," said UN Secretary-General Maria Rodriguez. "For the first time, we have a comprehensive framework that addresses both mitigation and adaptation strategies while ensuring that no country is left behind."

Key provisions of the agreement include:
- A commitment to achieve net-zero emissions by 2050 for developed nations
- Establishment of a $100 billion annual fund for climate adaptation in developing countries
- Mandatory reporting and verification of emission reduction efforts
- Support for renewable energy infrastructure development
- Protection of critical ecosystems and biodiversity

Environmental activists have praised the agreement as a significant step forward, though some argue that the targets could be even more ambitious. "While this is progress, we need to act faster and more decisively," said climate activist Sarah Johnson. "The science is clear that we need to reduce emissions more rapidly to avoid the worst impacts of climate change."

The agreement also includes innovative mechanisms for carbon trading and offset programs, designed to encourage private sector participation in climate action. Business leaders have expressed support for the framework, recognizing both the environmental imperative and the economic opportunities presented by the transition to a green economy.

Implementation of the agreement will require significant changes in energy policy, transportation systems, and industrial processes across the globe. Governments are now working to develop detailed implementation plans and secure necessary funding for the transition.

The success of this agreement will depend on continued political will and public support for climate action. Experts emphasize that individual actions, combined with government policies and business initiatives, will all be necessary to achieve the ambitious targets set forth in the agreement.`,
    author: 'Lisa Thompson',
    category: 'politics',
    publishedAt: '2024-01-13T14:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de4e1c312ffa?w=800&h=400&fit=crop',
    readTime: 7,
    tags: ['Climate Change', 'Politics', 'Environment', 'Global Summit'],
    featured: true,
  },
  {
    id: '4',
    title: 'Underdog Team Makes Historic Championship Run',
    summary: 'A previously unheralded team has defied all odds to reach the championship finals, capturing the hearts of sports fans worldwide.',
    content: `In what many are calling the most remarkable sports story of the year, an underdog team has completed an improbable journey to the championship finals, defying all expectations and capturing the imagination of sports fans around the world.

The team, which began the season with minimal expectations and a roster of relatively unknown players, has overcome numerous challenges to reach the pinnacle of their sport. Their journey has been marked by dramatic victories, clutch performances, and an unbreakable team spirit that has inspired fans and analysts alike.

"This is what sports is all about," said veteran sports commentator James Wilson. "When you see a team that nobody believed in come together and achieve something extraordinary, it reminds us all of the power of determination and teamwork."

The team's success has been built on several key factors:
- Exceptional coaching that maximized the potential of every player
- A defensive strategy that neutralized more talented opponents
- Clutch performances in critical moments from unexpected heroes
- Unwavering team chemistry and mutual support

The championship run has also had significant economic and social impacts. Local businesses have reported record sales during playoff games, and the team's success has brought communities together in celebration. The story has also inspired countless young athletes who see themselves in the underdog narrative.

"These players have shown that hard work, dedication, and belief in yourself can overcome any obstacle," said youth coach Maria Garcia. "They're role models for kids everywhere who dream of achieving the impossible."

The team's success has also sparked discussions about how we evaluate talent and potential in sports. Many analysts are reconsidering their assessment methods after witnessing how this team exceeded all predictions.

As the championship series approaches, the team faces their toughest challenge yet against a heavily favored opponent. However, their remarkable journey has already secured their place in sports history and inspired millions of fans worldwide.

Regardless of the final outcome, this team's story serves as a powerful reminder that in sports, as in life, anything is possible with determination, teamwork, and belief.`,
    author: 'Robert Davis',
    category: 'sports',
    publishedAt: '2024-01-12T19:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    readTime: 6,
    tags: ['Sports', 'Championship', 'Underdog', 'Team'],
  },
  {
    id: '5',
    title: 'Blockbuster Movie Shatters Box Office Records',
    summary: 'The highly anticipated film has exceeded all expectations, becoming the highest-grossing movie of the year and setting new industry benchmarks.',
    content: `The entertainment industry is celebrating a historic moment as the year's most anticipated blockbuster has shattered box office records, becoming the highest-grossing film of the year and setting new benchmarks for success in the movie business.

The film, which combines cutting-edge visual effects with compelling storytelling, has resonated with audiences worldwide, drawing crowds to theaters in unprecedented numbers. Industry analysts are calling it a "game-changer" that could influence how movies are made and marketed in the future.

"This success demonstrates that audiences are still eager for quality entertainment that provides both spectacle and substance," said film critic Amanda Rodriguez. "The filmmakers have found the perfect balance between visual innovation and emotional storytelling."

The movie's success has been driven by several factors:
- Innovative use of technology and visual effects
- Strong performances from a diverse cast
- Compelling storyline that appeals to multiple demographics
- Effective marketing campaign that built anticipation
- Positive word-of-mouth from early viewers

The film's impact extends beyond just box office numbers. It has sparked conversations about representation in Hollywood, the future of cinema technology, and the evolving relationship between streaming platforms and theatrical releases.

"Movies like this remind us why we go to the theater," said cinema owner David Chen. "The communal experience of watching something extraordinary on the big screen is irreplaceable."

The success has also had positive effects on the broader entertainment industry, with increased investment in similar projects and renewed confidence in the theatrical business model. Studios are now looking to replicate the film's success with their own ambitious projects.

However, some industry observers caution that this level of success may not be easily repeatable. "This was a perfect storm of factors that came together," noted entertainment analyst Sarah Johnson. "While it's encouraging, we shouldn't expect every big-budget film to achieve these results."

The film's director and cast have expressed gratitude for the overwhelming response from audiences. "We set out to make something special, and the fact that so many people have connected with our story is incredibly rewarding," said the film's director.

As the movie continues its theatrical run and prepares for home video release, industry experts are already analyzing its impact and looking for lessons that can be applied to future projects.`,
    author: 'Jennifer Lee',
    category: 'entertainment',
    publishedAt: '2024-01-11T12:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1489599835382-957593cb2375?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['Movies', 'Box Office', 'Entertainment', 'Hollywood'],
  },
  {
    id: '6',
    title: 'New Quantum Computing Breakthrough Promises Faster Processing',
    summary: 'Scientists have achieved a major milestone in quantum computing, bringing us closer to practical applications that could revolutionize computing.',
    content: `Researchers have announced a breakthrough in quantum computing technology that could accelerate the development of practical quantum computers. The achievement, which involves significant improvements in quantum error correction and coherence times, represents a major step forward in the field.

The breakthrough was made by a collaborative team of scientists from leading research institutions and technology companies. Their work addresses one of the fundamental challenges in quantum computing: maintaining the fragile quantum states long enough to perform useful computations.

"This is a significant milestone that brings us closer to the era of practical quantum computing," said Dr. Alex Kim, lead researcher on the project. "We've demonstrated that it's possible to maintain quantum coherence for much longer periods than previously thought possible."

The research has several important implications:
- Improved error correction methods that make quantum computers more reliable
- Longer coherence times that enable more complex calculations
- New approaches to quantum memory that could revolutionize data storage
- Potential applications in cryptography, drug discovery, and optimization problems

The breakthrough has attracted significant attention from both the scientific community and industry leaders. Major technology companies have already begun exploring potential applications and partnerships to develop commercial quantum computing solutions.

"Quantum computing has the potential to solve problems that are currently impossible for classical computers," explained quantum physicist Dr. Sarah Chen. "This breakthrough brings us significantly closer to realizing that potential."

However, experts caution that practical quantum computers are still years away from widespread availability. "While this is exciting progress, we need to manage expectations," said computer scientist Dr. Michael Rodriguez. "There are still many challenges to overcome before quantum computers become practical tools."

The research team is now working on scaling up their approach and developing practical applications. They're also collaborating with industry partners to explore commercial applications of their technology.

The breakthrough has also sparked renewed interest in quantum computing education and research funding. Universities are expanding their quantum computing programs, and governments are increasing investment in quantum research initiatives.

As the field continues to advance, experts predict that quantum computing will eventually transform industries ranging from pharmaceuticals to finance, creating new opportunities and challenges for businesses and society as a whole.`,
    author: 'Dr. Thomas Anderson',
    category: 'technology',
    publishedAt: '2024-01-10T09:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
    readTime: 7,
    tags: ['Quantum Computing', 'Technology', 'Research', 'Innovation'],
  },
  {
    id: '7',
    title: 'Major Economic Policy Changes Announced',
    summary: 'Government officials have unveiled comprehensive new economic policies aimed at addressing inflation and promoting sustainable growth.',
    content: `The government has announced sweeping changes to economic policy in response to ongoing challenges with inflation, supply chain disruptions, and economic recovery. The new policies represent a comprehensive approach to addressing current economic issues while laying the groundwork for long-term sustainable growth.

The policy changes include measures to control inflation, support small businesses, invest in infrastructure, and promote job creation. Government officials emphasized that these policies are designed to work together to create a more stable and prosperous economic environment.

"These policies reflect our commitment to addressing the economic challenges facing our nation while building a stronger foundation for future growth," said the Treasury Secretary during the announcement. "We're taking a balanced approach that considers both immediate needs and long-term objectives."

Key components of the new economic policies include:
- Targeted measures to reduce inflationary pressures
- Increased funding for small business support programs
- Major infrastructure investment initiatives
- Tax policy adjustments to promote economic activity
- Enhanced support for workforce development and training

The announcement has received mixed reactions from economists and business leaders. Some praise the comprehensive approach and focus on long-term solutions, while others express concerns about the potential impact on specific sectors or the effectiveness of certain measures.

"These policies show a thoughtful approach to complex economic challenges," said economist Dr. Lisa Thompson. "The combination of short-term relief and long-term investment could provide the stability needed for sustained economic growth."

However, some business leaders have expressed concerns about the implementation timeline and potential regulatory burden. "While we support the goals of these policies, we need to ensure that implementation doesn't create unnecessary complexity for businesses," said Chamber of Commerce President David Wilson.

The government has established a timeline for implementing these policies, with some measures taking effect immediately and others being phased in over the coming months. Officials have also committed to regular monitoring and adjustment of policies based on economic conditions and outcomes.

The policy changes come at a critical time for the economy, with many indicators showing both challenges and opportunities. Experts emphasize that the success of these policies will depend on effective implementation and continued monitoring of their impact.

As the policies begin to take effect, economists and policymakers will be closely watching their impact on key economic indicators including inflation, employment, and GDP growth.`,
    author: 'Mark Johnson',
    category: 'business',
    publishedAt: '2024-01-09T15:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    readTime: 6,
    tags: ['Economy', 'Policy', 'Inflation', 'Government'],
  },
  {
    id: '8',
    title: 'International Sports Tournament Draws Record Viewership',
    summary: 'The global sporting event has attracted unprecedented audience numbers, demonstrating the universal appeal of international competition.',
    content: `The international sports tournament has concluded with record-breaking viewership numbers, demonstrating the enduring power of international sports competition to bring people together across borders and cultures. The event, which featured teams from around the world, captured the attention of billions of viewers globally.

The tournament's success was driven by several factors, including high-quality competition, compelling storylines, and the universal appeal of sports as a unifying force. Organizers reported that viewership exceeded all previous records, with particularly strong engagement in emerging markets and among younger audiences.

"This tournament has shown that sports can still bring the world together in a meaningful way," said tournament director Maria Rodriguez. "The level of global engagement we've seen is truly remarkable and speaks to the universal appeal of international competition."

The event's success has been attributed to:
- Exceptional athletic performances that captivated audiences
- Compelling narratives and underdog stories
- Effective use of social media and digital platforms
- Strong engagement from fans in emerging markets
- High-quality broadcasting and production values

The tournament has also had significant economic and social impacts. Host cities reported increased tourism and economic activity, while sponsors and broadcasters saw strong returns on their investments. The event also provided opportunities for cultural exchange and international cooperation.

"Events like this remind us of our shared humanity," said sports psychologist Dr. James Wilson. "When people come together to celebrate athletic achievement, it transcends political and cultural differences."

The success has also sparked discussions about the future of international sports and the role of technology in enhancing the fan experience. Organizers are already planning for future tournaments, incorporating lessons learned from this year's event.

However, some observers have raised concerns about the commercialization of international sports and the pressure on athletes to perform at increasingly high levels. "We need to balance the entertainment value with the well-being of the athletes," noted sports ethicist Dr. Sarah Chen.

The tournament's legacy extends beyond just the competition itself. It has inspired new generations of athletes, strengthened international relationships, and demonstrated the power of sports to create positive social change.

As the sports world looks ahead to future international events, the success of this tournament provides a template for creating engaging, inclusive, and meaningful competitions that bring people together across the globe.`,
    author: 'Carlos Mendez',
    category: 'sports',
    publishedAt: '2024-01-08T11:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['Sports', 'International', 'Tournament', 'Viewership'],
  },
  {
    id: '9',
    title: 'Your Custom Article Title Here',
    summary: 'This is a brief summary of your custom article that will appear in the article cards.',
    content: `This is the beginning of your custom article content. You can write multiple paragraphs here.

This is the second paragraph of your article. You can include quotes, statistics, or any other information you want to share with your readers.

"This is an example quote from an expert or source," said John Doe, an industry expert. "You can include quotes to make your article more engaging and credible."

This is the third paragraph where you can continue your story or provide more details about the topic. You can also include bullet points or numbered lists if needed.

The article will automatically appear on your website once you save the file and the development server refreshes.`,
    author: 'Your Name',
    category: 'technology', // Change this to match your article topic
    publishedAt: '2024-01-20T10:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    readTime: 4,
    tags: ['Custom', 'Article', 'Example', 'News'],
    featured: true, // Set to true to show on homepage
  },
  {
    id: '10',
    title: 'హైదరాబాద్‌లో మెట్రో రైలు నిర్మాణం పూర్తయింది',
    summary: 'హైదరాబాద్ మెట్రో రైలు నిర్మాణం పూర్తయి, ప్రజలకు సులభమైన రవాణా సౌకర్యం లభించింది.',
    content: `హైదరాబాద్‌లో మెట్రో రైలు నిర్మాణం విజయవంతంగా పూర్తయింది. ఈ ప్రాజెక్ట్ ద్వారా నగర ప్రజలకు ఆధునిక మరియు సులభమైన రవాణా సౌకర్యం లభించింది.

మెట్రో రైలు నిర్మాణంలో మూడు ఫేజ్‌లలో మొత్తం 69 కిలోమీటర్ల మార్గం నిర్మించబడింది. ఈ ప్రాజెక్ట్‌లో హైదరాబాద్ మెట్రో రైల్ లిమిటెడ్ (HMRL) మరియు L&T మెట్రో రైల్ హైదరాబాద్ లిమిటెడ్ సంస్థలు కలిసి పనిచేశాయి.

"ఈ మెట్రో రైలు నిర్మాణం హైదరాబాద్ నగరానికి ఒక మైలురాయి," అని ముఖ్యమంత్రి కె. చంద్రశేఖర్ రావు పేర్కొన్నారు. "ఇది నగర రవాణా వ్యవస్థను మార్చి, ప్రజలకు సమయాన్ని ఆదా చేస్తుంది."

మెట్రో రైలు నిర్మాణంలో ఉపయోగించిన ప్రధాన సాంకేతిక లక్షణాలు:
- ఆధునిక సిగ్నలింగ్ వ్యవస్థ
- ఎలక్ట్రిక్ మల్టిపుల్ యూనిట్ (EMU) రైలు బండ్లు
- స్మార్ట్ కార్డ్ టికెట్ వ్యవస్థ
- ఎయిర్ కండిషనింగ్ సౌకర్యం
- డిజిటల్ డిస్ప్లే బోర్డులు

ఈ మెట్రో రైలు నిర్మాణం ద్వారా రోజుకు సుమారు 15 లక్షల ప్రజలు ప్రయాణించగలరు. ఇది రోడ్ ట్రాఫిక్‌ని తగ్గించి, వాయు కాలుష్యాన్ని తగ్గించడానికి సహాయపడుతుంది.

మెట్రో రైలు నిర్మాణంలో ఉపయోగించిన మెటీరియల్స్ మరియు సాంకేతిక పరిజ్ఞానం అన్నీ భారతీయ సంస్థల ద్వారా సరఫరా చేయబడ్డాయి. ఇది 'మేక్ ఇన్ ఇండియా' ఉద్యమానికి ఒక ఉదాహరణ.

భవిష్యత్తులో మెట్రో రైలు నెట్‌వర్క్‌ని మరింత విస్తరించే ప్రణాళికలు ఉన్నాయి. ఇందులో హైదరాబాద్ మెట్రోపాలిటన్ ఏరియా (HMA) లోని ఇతర ప్రాంతాలకు కూడా మెట్రో రైలు సౌకర్యం కల్పించే లక్ష్యం ఉంది.`,
    author: 'రాజేష్ కుమార్',
    category: 'business',
    publishedAt: '2024-01-19T14:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=400&fit=crop',
    readTime: 6,
    tags: ['మెట్రో రైలు', 'హైదరాబాద్', 'రవాణా', 'అభివృద్ధి'],
    featured: true,
  },
  {
    id: '11',
    title: 'ఆంధ్రప్రదేశ్‌లో కొత్త టెక్నాలజీ పార్క్ ప్రారంభం',
    summary: 'విశాఖపట్నంలో కొత్త టెక్నాలజీ పార్క్ ప్రారంభించబడింది, ఇది యువతకు ఉపాధి అవకాశాలు కల్పిస్తుంది.',
    content: `ఆంధ్రప్రదేశ్‌లో విశాఖపట్నంలో కొత్త టెక్నాలజీ పార్క్ విజయవంతంగా ప్రారంభించబడింది. ఈ టెక్నాలజీ పార్క్ ద్వారా రాష్ట్రంలోని యువతకు ఉపాధి అవకాశాలు మరియు టెక్నాలజీ అభివృద్ధికి అవకాశం లభిస్తుంది.

ఈ టెక్నాలజీ పార్క్‌లో 50 కంపెనీలు స్థాపించబడ్డాయి, వీటిలో సాఫ్ట్‌వేర్ డెవలప్మెంట్, ఆర్టిఫిషియల్ ఇంటెలిజెన్స్, మరియు డేటా సైన్స్ కంపెనీలు ఉన్నాయి. ఈ పార్క్‌లో సుమారు 5,000 మంది యువతకు ఉపాధి అవకాశం లభిస్తుంది.

"ఈ టెక్నాలజీ పార్క్ ఆంధ్రప్రదేశ్ యువతకు ఒక బంగారు అవకాశం," అని ముఖ్యమంత్రి వై.ఎస్. జగన్మోహన్ రెడ్డి పేర్కొన్నారు. "ఇది రాష్ట్ర ఆర్థిక వ్యవస్థను బలపరుస్తుంది మరియు యువతకు ఉత్తమ భవిష్యత్తును కల్పిస్తుంది."

టెక్నాలజీ పార్క్‌లో ఉన్న ప్రధాన సౌకర్యాలు:
- అధునాతన కంప్యూటర్ ల్యాబ్స్
- ఇంటర్నెట్ కనెక్టివిటీ
- మీటింగ్ రూమ్స్
- కాఫీ షాప్‌లు
- పార్కింగ్ సౌకర్యం
- సెక్యూరిటీ వ్యవస్థ

ఈ టెక్నాలజీ పార్క్‌లో ఉద్యోగులకు ఇచ్చే ప్రధాన ప్రయోజనాలు:
- ఆధునిక టెక్నాలజీ అనుభవం
- ఉత్తమ జీతం మరియు ప్రయోజనాలు
- కెరీర్ అభివృద్ధి అవకాశాలు
- వర్క్-లైఫ్ బాలెన్స్

ఈ టెక్నాలజీ పార్క్‌లో ఉద్యోగులకు ఇచ్చే ప్రధాన ప్రయోజనాలు:
- ఆధునిక టెక్నాలజీ అనుభవం
- ఉత్తమ జీతం మరియు ప్రయోజనాలు
- కెరీర్ అభివృద్ధి అవకాశాలు
- వర్క్-లైఫ్ బాలెన్స్

భవిష్యత్తులో ఈ టెక్నాలజీ పార్క్‌ని మరింత విస్తరించే ప్రణాళికలు ఉన్నాయి. ఇందులో మరిన్ని కంపెనీలను ఆకర్షించడం మరియు ఎక్కువ మంది యువతకు ఉపాధి అవకాశాలు కల్పించడం ఉంది.`,
    author: 'సుధా రెడ్డి',
    category: 'technology',
    publishedAt: '2024-01-18T11:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['టెక్నాలజీ పార్క్', 'విశాఖపట్నం', 'ఉపాధి', 'యువత'],
    featured: false,
  },
  {
    id: '12',
    title: 'తెలంగాణలో కొత్త విద్యా విధానం ప్రకటన',
    summary: 'తెలంగాణ ప్రభుత్వం కొత్త విద్యా విధానాన్ని ప్రకటించింది, ఇది విద్యార్థులకు మెరుగైన విద్యా అవకాశాలు కల్పిస్తుంది.',
    content: `తెలంగాణ ప్రభుత్వం కొత్త విద్యా విధానాన్ని ప్రకటించింది. ఈ విధానం ద్వారా విద్యార్థులకు మెరుగైన విద్యా అవకాశాలు మరియు భవిష్యత్ కెరీర్ అభివృద్ధికి అవకాశం లభిస్తుంది.

కొత్త విద్యా విధానంలో ప్రధాన మార్పులు:
- డిజిటల్ ఎడ్యుకేషన్ పై ఎక్కువ దృష్టి
- ఆర్ట్స్ మరియు సైన్స్ సబ్జెక్టుల మధ్య సంతులనం
- ప్రాక్టికల్ నాలెడ్జ్ పై ఎక్కువ శ్రద్ధ
- ఇంగ్లీష్ మరియు తెలుగు భాషల మధ్య సంతులనం
- స్పోర్ట్స్ మరియు కళలకు ప్రోత్సాహం

"ఈ కొత్త విద్యా విధానం మన విద్యార్థులకు ఉత్తమ భవిష్యత్తును కల్పిస్తుంది," అని విద్యా మంత్రి పేర్కొన్నారు. "ఇది డిజిటల్ యుగంలో విద్యార్థులను సిద్ధం చేస్తుంది."

కొత్త విద్యా విధానంలో ఉన్న ప్రధాన లక్షణాలు:
- స్మార్ట్ క్లాస్‌రూమ్స్
- డిజిటల్ లైబ్రరీలు
- ఆన్‌లైన్ లెర్నింగ్ ప్లాట్‌ఫార్మ్స్
- స్కిల్ డెవలప్మెంట్ ప్రోగ్రామ్స్
- ఇంటర్నేషనల్ ఎడ్యుకేషన్ పార్టనర్‌షిప్స్

ఈ విధానం ద్వారా విద్యార్థులకు లభించే ప్రయోజనాలు:
- ఆధునిక టెక్నాలజీ అనుభవం
- ఇంటర్నేషనల్ స్టాండర్డ్స్
- మెరుగైన ఉపాధి అవకాశాలు
- సమగ్ర వ్యక్తిత్వ అభివృద్ధి

భవిష్యత్తులో ఈ విద్యా విధానాన్ని మరింత మెరుగుపరచే ప్రణాళికలు ఉన్నాయి. ఇందులో మరిన్ని స్కూల్స్ మరియు కళాశాలలకు ఈ సౌకర్యాలను విస్తరించడం ఉంది.`,
    author: 'లక్ష్మి దేవి',
    category: 'politics',
    publishedAt: '2024-01-17T09:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=800&h=400&fit=crop',
    readTime: 4,
    tags: ['విద్యా విధానం', 'తెలంగాణ', 'డిజిటల్ ఎడ్యుకేషన్', 'విద్యార్థులు'],
    featured: false,
  },
  {
    id: '13',
    title: 'హైదరాబాద్‌లో కొత్త సినిమా థియేటర్‌లు ప్రారంభం',
    summary: 'హైదరాబాద్‌లో ఐమ్యాక్స్ మరియు 4DX సినిమా థియేటర్‌లు ప్రారంభించబడ్డాయి, ప్రేక్షకులకు అద్భుతమైన అనుభవం.',
    content: `హైదరాబాద్‌లో ఐమ్యాక్స్ మరియు 4DX సినిమా థియేటర్‌లు విజయవంతంగా ప్రారంభించబడ్డాయి. ఈ థియేటర్‌లు ప్రేక్షకులకు అద్భుతమైన సినిమా అనుభవాన్ని కల్పిస్తాయి.

ఈ కొత్త థియేటర్‌లలో ఉన్న ప్రధాన లక్షణాలు:
- ఐమ్యాక్స్ స్క్రీన్ - 70mm డిజిటల్ ప్రొజెక్షన్
- 4DX సీటింగ్ - మోషన్ సీట్స్ మరియు స్పెషల్ ఎఫెక్ట్స్
- డాల్బీ అట్మాస్ సౌండ్ సిస్టమ్
- 4K డిజిటల్ ప్రొజెక్షన్
- కంఫర్టబుల్ రీక్లైనింగ్ సీట్స్

"ఈ థియేటర్‌లు హైదరాబాద్ ప్రేక్షకులకు ఒక కొత్త అనుభవాన్ని కల్పిస్తాయి," అని థియేటర్ మేనేజర్ పేర్కొన్నారు. "ఇవి ఇంటర్నేషనల్ స్టాండర్డ్స్‌తో సమానమైన సౌకర్యాలను అందిస్తాయి."

ఈ థియేటర్‌లలో ప్రదర్శించబడే సినిమాలు:
- హాలీవుడ్ బ్లాక్‌బస్టర్స్
- బాలీవుడ్ హిట్స్
- తెలుగు సినిమాలు
- డాక్యుమెంటరీలు
- స్పెషల్ షోలు

థియేటర్‌లలో ఉన్న అదనపు సౌకర్యాలు:
- ఫుడ్ కోర్ట్
- గేమింగ్ జోన్
- కిడ్స్ ప్లే ఏరియా
- డిజిటల్ టికెట్ బుకింగ్
- ఆన్‌లైన్ ఫుడ్ ఆర్డరింగ్

ఈ థియేటర్‌లు రోజుకు సుమారు 5,000 మంది ప్రేక్షకులకు సేవ చేయగలవు. ఇవి హైదరాబాద్‌లోని ఎంటర్టైన్మెంట్ సెక్టర్‌కు ఒక కొత్త డైమెన్షన్‌ని జోడిస్తాయి.`,
    author: 'ప్రియా శర్మ',
    category: 'entertainment',
    publishedAt: '2024-01-16T16:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1489599835382-957593cb2375?w=800&h=400&fit=crop',
    readTime: 3,
    tags: ['సినిమా థియేటర్', 'ఐమ్యాక్స్', '4DX', 'హైదరాబాద్'],
    featured: false,
  },
  {
    id: '14',
    title: 'ఆంధ్రప్రదేశ్‌లో క్రికెట్ అకాడమీ ప్రారంభం',
    summary: 'విశాఖపట్నంలో కొత్త క్రికెట్ అకాడమీ ప్రారంభించబడింది, యువ క్రికెటర్లకు శిక్షణ అవకాశం.',
    content: `ఆంధ్రప్రదేశ్‌లో విశాఖపట్నంలో కొత్త క్రికెట్ అకాడమీ విజయవంతంగా ప్రారంభించబడింది. ఈ అకాడమీ యువ క్రికెటర్లకు ప్రొఫెషనల్ శిక్షణ అవకాశాన్ని కల్పిస్తుంది.

ఈ క్రికెట్ అకాడమీలో ఉన్న ప్రధాన సౌకర్యాలు:
- అంతర్జాతీయ స్టాండర్డ్స్‌తో కూడిన క్రికెట్ గ్రౌండ్
- నెట్ ప్రాక్టీస్ ఫెసిలిటీలు
- ఫిట్‌నెస్ సెంటర్
- స్పోర్ట్స్ మెడిసిన్ క్లినిక్
- హోస్టల్ సౌకర్యం
- డైటీషన్ సెంటర్

"ఈ అకాడమీ మన యువ క్రికెటర్లకు ఒక బంగారు అవకాశం," అని క్రికెట్ అకాడమీ డైరెక్టర్ పేర్కొన్నారు. "ఇది భవిష్యత్ క్రికెట్ స్టార్లను తయారు చేస్తుంది."

అకాడమీలో ఇచ్చే శిక్షణ కోర్సులు:
- బ్యాటింగ్ టెక్నిక్స్
- బౌలింగ్ టెక్నిక్స్
- ఫీల్డింగ్ డ్రిల్స్
- ఫిట్‌నెస్ ట్రైనింగ్
- మెంటల్ స్ట్రెంగ్త్ ట్రైనింగ్
- మ్యాచ్ అనాలిసిస్

ఈ అకాడమీలో శిక్షణ పొందే విద్యార్థులకు లభించే ప్రయోజనాలు:
- ప్రొఫెషనల్ కోచ్ల నుండి శిక్షణ
- ఇంటర్నేషనల్ క్రికెటర్లతో ఇంటరాక్షన్
- టూర్నమెంట్స్‌లో పాల్గొనే అవకాశం
- స్కాలర్‌షిప్ అవకాశాలు

భవిష్యత్తులో ఈ అకాడమీని మరింత విస్తరించే ప్రణాళికలు ఉన్నాయి. ఇందులో మరిన్ని గ్రౌండ్లు మరియు ట్రైనింగ్ ఫెసిలిటీలు జోడించడం ఉంది.`,
    author: 'రవి కుమార్',
    category: 'sports',
    publishedAt: '2024-01-15T13:10:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    readTime: 4,
    tags: ['క్రికెట్ అకాడమీ', 'విశాఖపట్నం', 'యువ క్రికెటర్లు', 'శిక్షణ'],
    featured: false,
  },
  {
    id: '15',
    title: 'తెలంగాణలో స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు',
    summary: 'తెలంగాణలోని వివిధ నగరాలలో స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు విజయవంతంగా అమలు చేయబడుతున్నాయి.',
    content: `తెలంగాణలోని వివిధ నగరాలలో స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు విజయవంతంగా అమలు చేయబడుతున్నాయి. ఈ ప్రాజెక్ట్‌లు నగర ప్రజలకు మెరుగైన జీవన నాణ్యతను కల్పిస్తాయి.

స్మార్ట్ సిటీ ప్రాజెక్ట్‌లలో ఉన్న ప్రధాన లక్షణాలు:
- స్మార్ట్ ట్రాఫిక్ మేనేజ్మెంట్ సిస్టమ్
- స్మార్ట్ స్ట్రీట్ లైటింగ్
- వేస్ట్ మేనేజ్మెంట్ సిస్టమ్
- స్మార్ట్ వాటర్ సప్లై
- డిజిటల్ గవర్నెన్స్ ప్లాట్‌ఫార్మ్
- స్మార్ట్ పార్కింగ్ సిస్టమ్

"ఈ స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు మన నగరాలను డిజిటల్ యుగంలో సిద్ధం చేస్తాయి," అని ముఖ్యమంత్రి పేర్కొన్నారు. "ఇవి ప్రజల జీవితాలను సులభతరం చేస్తాయి."

స్మార్ట్ సిటీ ప్రాజెక్ట్‌లలో ఉపయోగించిన టెక్నాలజీలు:
- ఇంటర్నెట్ ఆఫ్ థింగ్స్ (IoT)
- ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ (AI)
- బిగ్ డేటా అనాలిసిస్
- క్లౌడ్ కంప్యూటింగ్
- మొబైల్ అప్లికేషన్స్

ఈ ప్రాజెక్ట్‌లు ద్వారా ప్రజలకు లభించే ప్రయోజనాలు:
- మెరుగైన రవాణా వ్యవస్థ
- సమర్థవంతమైన వేస్ట్ మేనేజ్మెంట్
- మెరుగైన భద్రతా వ్యవస్థ
- డిజిటల్ సేవలు
- శక్తి సంరక్షణ

భవిష్యత్తులో ఈ స్మార్ట్ సిటీ ప్రాజెక్ట్‌లను మరిన్ని నగరాలకు విస్తరించే ప్రణాళికలు ఉన్నాయి.`,
    author: 'సురేష్ రెడ్డి',
    category: 'technology',
    publishedAt: '2024-01-14T10:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['స్మార్ట్ సిటీ', 'తెలంగాణ', 'డిజిటల్ గవర్నెన్స్', 'టెక్నాలజీ'],
    featured: false,
  },
  {
    id: '16',
    title: 'ఆంధ్రప్రదేశ్‌లో కొత్త వ్యవసాయ విధానం',
    summary: 'ఆంధ్రప్రదేశ్ ప్రభుత్వం కొత్త వ్యవసాయ విధానాన్ని ప్రకటించింది, రైతులకు మెరుగైన సహాయం.',
    content: `ఆంధ్రప్రదేశ్ ప్రభుత్వం కొత్త వ్యవసాయ విధానాన్ని ప్రకటించింది. ఈ విధానం ద్వారా రైతులకు మెరుగైన సహాయం మరియు ఆదాయం కల్పించే లక్ష్యం ఉంది.

కొత్త వ్యవసాయ విధానంలో ఉన్న ప్రధాన లక్షణాలు:
- డిజిటల్ వ్యవసాయ పద్ధతులు
- ఆర్గానిక్ ఫార్మింగ్ ప్రోత్సాహం
- మైక్రో ఇరిగేషన్ సిస్టమ్స్
- సోయిల్ హెల్త్ కార్డ్స్
- డిజిటల్ మార్కెటింగ్ ప్లాట్‌ఫార్మ్
- ఫార్మర్ ప్రొడ్యూసర్ ఆర్గనైజేషన్స్ (FPOs)

"ఈ కొత్త వ్యవసాయ విధానం మన రైతులకు ఒక కొత్త భవిష్యత్తును కల్పిస్తుంది," అని వ్యవసాయ మంత్రి పేర్కొన్నారు. "ఇది వ్యవసాయ రంగాన్ని ఆధునీకరిస్తుంది."

వ్యవసాయ విధానంలో ఉన్న ప్రధాన సౌకర్యాలు:
- సబ్సిడీలు మరియు రుణాలు
- ఇన్సూరెన్స్ కవరేజ్
- టెక్నికల్ సపోర్ట్
- మార్కెట్ లింకేజ్
- ట్రైనింగ్ ప్రోగ్రామ్స్

ఈ విధానం ద్వారా రైతులకు లభించే ప్రయోజనాలు:
- మెరుగైన ఉత్పాదకత
- ఎక్కువ ఆదాయం
- డిజిటల్ సేవలు
- మార్కెట్ అక్సెస్
- ఇన్సూరెన్స్ కవరేజ్

భవిష్యత్తులో ఈ వ్యవసాయ విధానాన్ని మరింత మెరుగుపరచే ప్రణాళికలు ఉన్నాయి.`,
    author: 'వెంకటేష్ రెడ్డి',
    category: 'business',
    publishedAt: '2024-01-13T08:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop',
    readTime: 4,
    tags: ['వ్యవసాయ విధానం', 'ఆంధ్రప్రదేశ్', 'రైతులు', 'డిజిటల్ వ్యవసాయం'],
    featured: false,
  },
];

export const categories = [
  { name: 'technology', label: 'Technology', color: '#1976d2' },
  { name: 'business', label: 'Business', color: '#2e7d32' },
  { name: 'politics', label: 'Politics', color: '#d32f2f' },
  { name: 'sports', label: 'Sports', color: '#ed6c02' },
  { name: 'entertainment', label: 'Entertainment', color: '#9c27b0' },
];

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): NewsArticle[] => {
  return newsArticles.filter(article => article.featured);
};

export const getArticleById = (id: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const searchArticles = (query: string): NewsArticle[] => {
  const lowercaseQuery = query.toLowerCase();
  return newsArticles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.summary.toLowerCase().includes(lowercaseQuery) ||
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}; 