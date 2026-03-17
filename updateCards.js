const fs = require('fs');

const courseSlugMap = {
  "data-science": "Data Science",
  "full-stack-developer-course": "Advanced Full Stack",
  "python-full-stack-development-course": "Python Full Stack",
  "java-full-stack-development-course": "Java Full Stack",
  "awsdevopscourse": "AWS DevOps",
  "artificial-intelligence-course-training-institute-in-hyderabad": "Artificial Intelligence",
  "digital-marketing-course-training-institute-hyderabad": "Digital Marketing",
  "generative-ai-course-training-institute-hyderabad": "Generative AI",
  "data-analytics-course-training-hyderabad": "Data Analytics",
  "snowflake-training-in-hyderabad": "Snowflake",
  "salesforce-course": "Salesforce"
};

try {
    let fileContent = fs.readFileSync('src/app/courses/mainCoursePage/cardsSection/CardData.js', 'utf8');

    // Strip out all previously injected dynamic string keys
    fileContent = fileContent.replace(/subText:\s*['"`][\s\S]*?['"`],\s*/g, '');
    fileContent = fileContent.replace(/subTextHighlits:\s*['"`][\s\S]*?['"`],\s*/g, '');
    fileContent = fileContent.replace(/highlights:\s*\[[\s\S]*?\],\s*/g, '');
    fileContent = fileContent.replace(/socialProof:\s*['"`][\s\S]*?['"`],\s*/g, '');
    fileContent = fileContent.replace(/placementNote:\s*['"`][\s\S]*?['"`],\s*/g, '');
    fileContent = fileContent.replace(/Header:\s*[`"'].*?[`"'],\s*/g, '');
    fileContent = fileContent.replace(/students:\s*['"].*?['"],\s*/g, '');

    // Now match against the SLUG value, then inject right below it
    const regex = /(slug:\s*['"]([^'"]+)['"],)/g;

    fileContent = fileContent.replace(regex, (match, fullMatch, slugName) => {
        let mappedName = courseSlugMap[slugName] || slugName;
        let unifiedProps = `
        students: '16000+ Students',
        Header: "#India’s 1st ${mappedName} Program with Career Intelligence",
        subText: "Don’t just learn ${mappedName} - ",
        subTextHighlits: "Build real ${mappedName} Applications, Track your skills",
        highlights: [
            "AI-Powered ${mappedName} Practice Labs",
            "Weekly Skill Assessments & Performance Reports",
            "Personal Skill Score Dashboard",
            "30+ Real ${mappedName} Projects",
            "3-Month Industry Internship",
            "7 Global Certifications ",
            "Eligible for 10+ High-Demand Job Roles"
        ],
        socialProof: "Join 16,000+ Students Trained",
        placementNote: "95% Placement Support | Industry Mentors",`;
        return fullMatch + '\n' + unifiedProps;
    });

    fs.writeFileSync('src/app/courses/mainCoursePage/cardsSection/CardData.js', fileContent);
    console.log('Successfully updated CardData.js for all courses mapped tightly to course names via slugs.');
} catch (error) {
    console.error('Error updating CardData.js:', error);
}
