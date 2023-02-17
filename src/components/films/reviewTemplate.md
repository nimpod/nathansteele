            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot3 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
            ".replace(/screenshot1|screenshot2|screenshot3/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/arrietty/screenshot1.jpg'),
                    screenshot2: require('../img/films/arrietty/screenshot2.jpg'),
                    screenshot3: require('../img/films/arrietty/screenshot3.jpg'),
                };
                return mapObj[matched];
            }),