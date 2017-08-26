FlowRouter.route('/', {
  action: function(params){
    console.log("Yes we are on homepage");
    BlazeLayout.render("homeLayout", { content: "home" });
  }
});