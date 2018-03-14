<template>
  <svg>
    <title class='iconTitle'>{{description}}</title>
  </svg>
</template>

<script>
import icons from 'carbon-icons'

export default {
  name: 'ca-icon',
  data: () => ({
    iconElement: null
  }),
  props: {
    description: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // console.log(this.getIcon(this.iconName)[0][0])
    // var path = document.createElement("path");
    // path.setAttribute('d', this.getIcon(this.iconName)[0][0].d);
    // path.setAttribute('key', this.getIcon(this.iconName)[0][0].key);
    // this.$el.querySelector('.iconTitle').append(path)
  },
  methods: {
    getIcon(name, iconsObj = icons) {
      const icon = iconsObj.filter(obj => obj.name === name);

      if (icon.length === 0) {
        return false;
      } else if (icon.length > 1) {
        throw new Error('[Carvue]: Multiple icons found')
      } 
      const iconSvg = icon[0].svgData;

      const svgElement = Object.keys(iconSvg).filter(key => iconSvg[key]).map(key => {
        const data = iconSvg [key];
        if (key === 'circles') {
          return data.map((circle, index) => {
            const circleProps = {
              cx: circle.cx,
              cy: circle.cy,
              r: circle.r,
              key: `circle${index}`
            }
            return `<circle cx=${circleProps.cx}
                            cy=${circleProps.cy}
                            r=${circleProps.r}
                            key=${circleProps.key}/>`;
          })
        } else if (key === 'paths') {
          return data.map((path, index) => {
            const pathProps = {
              d: path.d,
              key: `key${index}`
            }
            return pathProps
          })
        } else {
          return ''
        }
      })
      return svgElement
    },

  }
}
</script>

