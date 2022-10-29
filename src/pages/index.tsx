export default function Home() {
	return (
		<div className="bg-black h-screen w-screen text-white flex items-center justify-center flex-col">
			<h1 className="text-4xl font-bold mb-4">
				This is my startup template for <span className="text-blue-600">NextJS</span> with{' '}
				<span className="text-yellow-400">TailwindCSS</span>
			</h1>
			<h3 className="font-bold  text-2xl mb-2">This template is configured with the following options:</h3>
			<ul className="list-disc">
				<li>Pre-Commit hook with husky</li>
				<li>My most used EsLint Configuration</li>
				<li>My most used Prettier Configuration</li>
				<li>My most used vscode Configuration</li>
				<li>NodeJS Environment type declaration (global.d.ts)</li>
				<li>Support for upcoming app directory and layouts (Coming soon)</li>
				<li>Sentry integration (Coming soon)</li>
			</ul>
		</div>
	);
}
