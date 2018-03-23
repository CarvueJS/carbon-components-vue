export default function wrapper(storyFn) {
  return {
    ...storyFn(),
    render: (h) => {
      h('ca-tile', {
        style: {
          // height: '500px',
          // width: '400px'
        },
      }, [
        h(storyFn()),
      ]);
    },
  };
}
