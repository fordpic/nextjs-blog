import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

// if using TS...
// export default function Date({ dateString }: { dateString: string }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
// }
