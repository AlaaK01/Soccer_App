import React from 'react';


const About = () => {
  return (
    
       <footer className="footer-type01">
        <div className="container">
            <div className="row">
                <ul className="footer-widget">
                    <li className="widget-about"><h4 className="footerheading">about <span>soccer club</span></h4>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vitae, velit perferendis
                            dolor atque magni, porro minus repellendus nostrum alias ea deserunt. Vel quam explicabo
                            laudantium accusamus est, nulla minima!</p>

                        <p><span className="uppercaseheading">address:</span><span className="red">239</span> main street
                            London,England.</p>

                        <p><span className="uppercaseheading">call:</span> <span className="red">1800-2222-3333</span></p></li>
                    <li className="widget-news"><h4 className="footerheading">recent <span>news</span></h4>
                        <ul className="widget-newsdetails clearfix">
                            <li className="clearfix"><a href="#" className="clearfix">
                                {/* <div className="widget-pic"
                                     style="background:url(images/widget/widget01.jpg) center no-repeat"></div> */}
                                <div className="widget-newsinfo"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Numquam soluta excepturi.</p>

                                    <p className="uppercaseheading">18 september ,<span className="red">2015</span></p></div>
                            </a></li>
                            <li className="clearfix"><a href="#" className="clearfix">
                                {/* <div className="widget-pic"
                                     style="background:url(images/widget/widget02.jpg) center no-repeat"></div> */}
                                <div className="widget-newsinfo"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Numquam soluta excepturi.</p>

                                    <p className="uppercaseheading">18 september ,<span className="red">2015</span></p></div>
                            </a></li>
                            <li className="clearfix"><a href="#" className="clearfix">
                                {/* <div className="widget-pic"
                                     style="background:url(images/widget/widget03.jpg) center no-repeat"></div> */}
                                <div className="widget-newsinfo"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Numquam soluta excepturi.</p>

                                    <p className="uppercaseheading">18 september ,<span className="red">2015</span></p></div>
                            </a></li>
                        </ul>
                    </li>
                    <li className="widget-product"><h4 className="footerheading">real <span>soccer products</span></h4>
                        <ul className="widget_productdetails">
                            <li><a href="#">shoes(4)</a></li>
                            <li><a href="#">men(4)</a></li>
                            <li><a href="#">t-shirt(4)</a></li>
                            <li><a href="#">sports(4)</a></li>
                            <li><a href="#">glass</a></li>
                        </ul>
                    </li>
                    <li className="widget-comment"><h4 className="footerheading">recent <span>comments</span></h4>
                        <ul className="widget_commentDetails">
                            <li><a href="#" className="clearfix">
                                <div className="comment-pic">
                                    <div className="columnpic">    <img src="images/widget/comment01.jpg" alt="image" /></div>
                                </div>
                                <div className="commentinfo"><p className="uppercaseheading">jhon doe</p>

                                    <p>18 April ,<span className="red">2015</span></p>

                                    <p>nice and cool</p></div>
                            </a></li>
                            <li><a href="#" className="clearfix">
                                <div className="comment-pic">
                                    <div className="columnpic"><img src="images/widget/comment02.jpg" alt="image" /></div>
                                </div>
                                <div className="commentinfo"><p className="uppercaseheading">jhon doe</p>

                                    <p>18 April ,<span className="red">2015</span></p>

                                    <p>nice and cool</p></div>
                            </a></li>
                            <li><a href="#" className="clearfix">
                                <div className="comment-pic">
                                    <div className="columnpic"><img src="images/widget/comment03.jpg" alt="image" /></div>
                                </div>
                                <div className="commentinfo"><p className="uppercaseheading">jhon doe</p>

                                    <p>18 April ,<span className="red">2015</span></p>

                                    <p>nice and cool</p></div>
                            </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
       
    </footer>
  
  )
}

export default About
