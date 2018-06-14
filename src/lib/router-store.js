export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let hisdata = vm.$store.getters.getHistroydata(to.path);
      if (hisdata != null) {
        for (let key in vm.$data) {
          console.log(key);
          vm.$data[key] = hisdata[key];
        }
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "是否保存已编辑输入数据?(下次进入此页面将恢复输入数据)"
    );
    if (answer) {
      this.$store.dispatch("setHistroydata", {
        data: this.$data,
        path: from.path
      });
    } else {
      this.$store.dispatch("setHistroydata", { data: null, path: from.path });
    }
    next();
  }
};
