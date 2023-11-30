import { db } from '../db/db.server';

type Jobs = {
    title: string;
    description: string;
    qualification: string;
    responsibilities: string;
    location: string;
    company_name: string;
    company_website: string;
    company_tagline: string;
    company_logo: string;
};

const getJobs = ():Array<Jobs> => {
    return [
        {
            title: 'Backedn Developer',
            description: 'Respice ... Sentio sicut ego vobis exponam: sed vias breve iterum conabor. Fugere hoc maior difficultas est nobis. Perdet eam batch nostri. Et delebis eam ac omnia opus est vestigium, ut possimus coques. Sin id, quod morte morieris. Locus non est peccatum. Nec apud hos.',
            qualification: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iure adipisci sequi exercitationem natus quia id aliquam dicta cum cupiditate?',
            responsibilities: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iure adipisci sequi exercitationem natus quia id aliquam dicta cum cupiditate?',
            location: 'Stockholm, Sweden',
            company_name: 'Quantastic',
            company_website: 'www.quantastic.com',
            company_tagline: 'Quantifiable fantastic',
            company_logo: 'https://logoipsum.com/artwork/298',
        },
        {
            title: 'Frontend Developer',
            description: 'Respice ... Sentio sicut ego vobis exponam: sed vias breve iterum conabor. Fugere hoc maior difficultas est nobis. Perdet eam batch nostri. Et delebis eam ac omnia opus est vestigium, ut possimus coques. Sin id, quod morte morieris. Locus non est peccatum. Nec apud hos.',
            qualification: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iure adipisci sequi exercitationem natus quia id aliquam dicta cum cupiditate?',
            responsibilities: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iure adipisci sequi exercitationem natus quia id aliquam dicta cum cupiditate?',
            location: 'Gothenburg, Sweden',
            company_name: 'Pluralistic',
            company_website: 'www.pluralistic.com',
            company_tagline: 'If you can not think it, we will',
            company_logo: 'https://logoipsum.com/artwork/297',
        },
        {
            title: 'Fullstack Developer',
            description: 'Respice ... Sentio sicut ego vobis exponam: sed vias breve iterum conabor. Fugere hoc maior difficultas est nobis. Perdet eam batch nostri. Et delebis eam ac omnia opus est vestigium, ut possimus coques. Sin id, quod morte morieris. Locus non est peccatum. Nec apud hos.',
            qualification: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iure adipisci sequi exercitationem natus quia id aliquam dicta cum cupiditate?',
            responsibilities: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iure adipisci sequi exercitationem natus quia id aliquam dicta cum cupiditate?',
            location: 'Malmö, Sweden',
            company_name: 'Swedoolius',
            company_website: 'www.sweedolius.com',
            company_tagline: 'If you can not think it, we will',
            company_logo: 'https://logoipsum.com/artwork/295',
        },
    ]
}

const seed = async () => {
    await Promise.all(
        getJobs().map(async (job) => {
            return await db.jobs.create({
                data: {
                    title: job.title,
                    description: job.description,
                    qualification: job.qualification,
                    responsibilities: job.responsibilities,
                    location: job.location,
                    company_name: job.company_name,
                    company_website: job.company_website,
                    company_tagline: job.company_tagline,
                    company_logo: job.company_logo,
                }
            })
        })
    );
    const jobs = await db.jobs.findFirst({
        where: {
            title: 'Backend Developer',
        }
    });
}

seed();