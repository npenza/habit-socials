export default function formatStartDate(date : Date): String{

    const formattedStartDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formattedStartDate;
}