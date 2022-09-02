import useStore from '../../hooks/useStore';

import CreateTags from './';

function Template() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	return <CreateTags selectedPodcast={selectedPodcast} />;
}

export const Default = Template.bind({});

const story = {
	title: 'CreateTags',
	component: CreateTags,
};

export default story;
