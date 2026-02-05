<template>
  <Card>
    <Button @click="setSelectedTab('StoredResources')" :mode="storedButtonMode"
      >Stored Resources</Button
    >
    <Button @click="setSelectedTab('AddResource')" :mode="addResourceMode"
      >Add Resource</Button
    >
    <keep-alive>
      <Component :is="selectedTab"></Component>
    </keep-alive>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'StoredResources',
      resources: [
        {
          id: 1,
          title: 'Senior Editor',
          description: 'Stainless steel measuring spoons set for cooking.',
          link: 'http://drupal.org/fusce/posuere/felis.jsp?velit=neque&eu=duis&est=bibendum',
        },
        {
          id: 2,
          title: 'Web Designer IV',
          description: 'Small toolkit with essentials for home repairs.',
          link: 'https://jiathis.com/ac/consequat/metus/sapien.aspx?nulla=odio&dapibus=curabitur&dolor=convallis',
        },
        {
          id: 3,
          title: 'Analog Circuit Design manager',
          description: 'Therapeutic weighted blanket for better sleep.',
          link: 'http://ca.gov/mattis/nibh/ligula/nec/sem.xml?quisque=ultrices&erat=posuere&eros=cubilia',
        },
        {
          id: 4,
          title: 'Recruiting Manager',
          description: 'Portable rechargeable warmer for cold days.',
          link: 'http://redcross.org/sed/ante/vivamus.js?hac=morbi&habitasse=sem&platea=mauris',
        },
        {
          id: 5,
          title: 'Assistant Media Planner',
          description:
            'Crunchy granola with toasted coconut flakes, perfect for breakfast or snacks.',
          link: 'http://economist.com/sapien/sapien.json?curae=consequat&nulla=dui&dapibus=nec',
        },
      ],
    };
  },
  computed: {
    storedButtonMode() {
      return this.selectedTab === 'StoredResources' ? 'flat' : null;
    },
    addResourceMode() {
      return this.selectedTab === 'AddResource' ? 'flat' : null;
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      console.log(title);
      this.resources.push({
        id: new Date().toDateString(),
        title,
        description,
        link,
      });
    },
  },
};
</script>
