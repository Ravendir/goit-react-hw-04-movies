(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{94:function(t,e,a){"use strict";a.r(e);var n=a(56),r=a.n(n),c=a(57),s=a(15),i=a(16),o=a(18),p=a(17),h=a(0),u=a(58),l=a(4),m=function(t){Object(o.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={actors:[]},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=Object(c.a)(r.a.mark((function t(){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,u.b.getCastReviewApi(e,u.a.CREDITS);case 3:a=t.sent,this.setState({actors:a.cast});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:this.state.actors.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://cdn.pixabay.com/photo/2020/05/15/13/58/mountain-5173654_960_720.jpg",alt:t.name}),t.name,Object(l.jsx)("p",{children:"Character:\n                ".concat(t.character)})]},t.id)}))})})}}]),a}(h.Component);e.default=m}}]);
//# sourceMappingURL=7.814e2d20.chunk.js.map