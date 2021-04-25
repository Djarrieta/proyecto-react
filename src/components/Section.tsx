import Button from "./Button";

const Section = (props: {
	children?: any;
	name: string;
	button?: boolean;
	handleFunction?: any;
}) => {
	const { children, name, button, handleFunction } = props;

	return (
		<section className="w-full max-w-4xl p-2 my-2 border-b border-l rounded-lg border-primary-light bg-primary">
			<div className="flex justify-between border-b border-primary-light">
				<h1 className="pl-4 my-1 text-3xl uppercase">{name}</h1>
				{button && (
					<div className="w-16 py-1">
						<Button name="+" handleFunction={handleFunction}></Button>
					</div>
				)}
			</div>
			{children}
		</section>
	);
};
export default Section;