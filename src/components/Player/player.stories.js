import Player from './';

function Template() {
	return <Player />;
}

export const Default = Template.bind({});

const story = {
	title: 'Player',
	component: Player,
};

export default story;
