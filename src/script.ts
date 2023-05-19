import { db } from './utils/db.server';

async function main() {
    const job = await db.jobs.create({
        data: {
            title: 'My new job',
            description: 'My new job description',
            qualification: 'My new job qualification',
            responsibilities: 'My new job responsibilities',
            location: 'My new job location',
            company_name: 'Google',
            company_website: 'https://www.google.com',
            company_tagline: 'Search Engine',
            company_logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',

        }
    }); // Error: Field "id" of type "Int" is required but not provided.
    console.log({job});
}


main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await db.$disconnect();
    });