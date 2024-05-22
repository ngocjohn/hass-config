class NavigationCard extends HTMLElement {
    set hass(hass) {
        const _this = this;
        var xDown, yDown, xDiff, yDiff;
        var is_swipe = false;
        var intervalIds = [];

        //Init the card
        if (!this.card) {
            
            let { touchpad, buttons } = this.buildCard();
            
            let pressDown = function (e) {
                e.preventDefault();

                xDown = e.clientX || e.touches[0].clientX;
                yDown = e.clientY || e.touches[0].clientY;
                    
                document.addEventListener('touchmove', pressMove);
                document.addEventListener('mousemove', pressMove);
                document.addEventListener('touchend', pressRelease);
                document.addEventListener('mouseup', pressRelease, false);
            };
            
            let pressMove = function (e) {
                
                if (xDown && yDown) {
                    xDiff = xDown - (e.clientX || e.touches[0].clientX);
                    yDiff = yDown - (e.clientY || e.touches[0].clientY);
                }
                if(Math.abs(xDiff) > 2 || Math.abs(yDiff) > 2) {
                    is_swipe = true;
                }
            };

            let pressRelease = function (e) {
                document.removeEventListener('touchmove', pressMove);
                document.removeEventListener('mousemove', pressMove);
                document.removeEventListener('touchend', pressRelease);
                document.removeEventListener('mouseup', pressRelease);

                if(is_swipe) {
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                        if (xDiff > 0) {
                            //Left Swipe
                            _this.callHassService(hass, _this.config.swipe_left.service, _this.config.swipe_left.data);
                        } else {
                            //Right Swipe
                            _this.callHassService(hass, _this.config.swipe_right.service, _this.config.swipe_right.data);
                        }
                    } else {
                        if (yDiff > 0) {
                            //Up Swipe
                            _this.callHassService(hass, _this.config.swipe_up.service, _this.config.swipe_up.data);
                        } else {
                            //Down Swipe
                            _this.callHassService(hass, _this.config.swipe_down.service, _this.config.swipe_down.data);
                        }
                    }
                    //Reset
                    xDown, yDown, xDiff, yDiff = null;
                    is_swipe = false;
                }
                else if(e.button == undefined || e.button == 0) {
                    _this.callHassService(hass, _this.config.tap_action.service, _this.config.tap_action.data);
                }
            }; 

            let buttonDown = function (e) {
                if (e.cancelable) {
                    e.preventDefault();
                }
                e.stopPropagation();
                if(e.button == undefined || e.button == 0) {
                    var service = e.currentTarget.service;
                    var service_data = e.currentTarget.service_data;

                    if(e.currentTarget.hold_repeat_enabled) {
                        intervalIds.push(setInterval(function() {
                            _this.callHassService(hass, service, service_data);
                        }, 250));
                    }
                }
            };

            let buttonRelease = function (e) {
                intervalIds.forEach(clearInterval);
                intervalIds = [];
                _this.callHassService(hass, e.currentTarget.service, e.currentTarget.service_data);
            };

            //Initilize Event Listeners
            ['touchstart','mousedown'].forEach(function(e) {
                touchpad.addEventListener(e, pressDown);
                buttons.forEach(function(bttn) {
                    bttn.addEventListener(e, buttonDown);
                });
            });
            ['mouseup','touchend'].forEach(function(e) {
                buttons.forEach(function(bttn) {
                    bttn.addEventListener(e, buttonRelease);
                });
            });
        }
    }

    buildCard() {
        //CSS
        const style = document.createElement('style');
        style.textContent = `
                .nc-touchpad { 
                    display: grid; 
                    gap: 20px; 
                    aspect-ratio: 1; 
                    grid-template-areas: ' .  tbl tbm tbr  . ' 
                                         'lbt  .   .   .  rbt' 
                                         'lbm  .   .   .  rbm'
                                         'lbb  .   .   .  rbb'
                                         ' .  bbl bbm bbr  . '
                }
                .nc-button { justify-content: center; align-content: center; display: inline-grid; --mdc-icon-size: 48px; }
                ha-icon { display: grid; align-content:center; justify-content: center; }
                #top_button_left { grid-area: tbl;}
                #top_button_middle { grid-area: tbm; }
                #top_button_right { grid-area: tbr;  }
                #left_button_top { grid-area: lbt; }
                #left_button_middle { grid-area: lbm;  color: #E50914; }
                #left_button_bottom { grid-area: lbb;  color: #66aa33; }
                #right_button_top { grid-area: rbt; }
                #right_button_middle { grid-area: rbm; color: red;}
                #right_button_bottom { grid-area: rbb; }
                #bottom_button_left { grid-area: bbl; color: #BABABA; }
                #bottom_button_middle { grid-area: bbm; }
                #bottom_button_right { grid-area: bbr; color: #BABABA; }
            `;
        this.appendChild(style);
        
        //HA Card
        const card = document.createElement('ha-card');
        this.card = card;
        this.appendChild(card);        

        //Build Touchpad and Buttons
        let buttons = [];
        let touchpad = document.createElement('div');
        touchpad.id = 'touchpad';
        touchpad.className = 'nc-touchpad';
        card.appendChild(touchpad);

        //Top Buttons
        buildAndAppendButton('top_button_left', this.config.top_button_left); 
        buildAndAppendButton('top_button_middle', this.config.top_button_middle); 
        buildAndAppendButton('top_button_right', this.config.top_button_right); 
            
        //Left Buttons
        buildAndAppendButton('left_button_top', this.config.left_button_top);           
        buildAndAppendButton('left_button_middle', this.config.left_button_middle);   
        buildAndAppendButton('left_button_bottom', this.config.left_button_bottom); 

        //Right Buttons
        buildAndAppendButton('right_button_top', this.config.right_button_top);
        buildAndAppendButton('right_button_middle', this.config.right_button_middle); 
        buildAndAppendButton('right_button_bottom', this.config.right_button_bottom); 
        
        //Bottom Buttons
        buildAndAppendButton('bottom_button_left', this.config.bottom_button_left); 
        buildAndAppendButton('bottom_button_middle', this.config.bottom_button_middle); 
        buildAndAppendButton('bottom_button_right', this.config.bottom_button_right); 
        
        return { touchpad, buttons };

        function buildAndAppendButton(id, button_config) {
            if(button_config == null) {
                return;
            }
            let button = document.createElement('ha-icon-button');
            button.className = 'nc-button';
            button.id = id;
            button.service = button_config.service;
            button.service_data = button_config.data;
            button.hold_repeat_enabled = button_config.hold_repeat_enabled | false;
            button.innerHTML = '<ha-icon icon="' + button_config.icon + '"></ha-icon>';
            buttons.push(button);
            touchpad.appendChild(button);
        }
    }

    callHassService(hass, domain_service , data) {
        let split = domain_service.split(".");
        var domain = split[0];
        var service = split[1];
        hass.callService(domain, service, data);
    }

    setConfig(config) {
        if (!config.swipe_left) {
            throw new Error('You need to define swipe_left');
        }
        if (!config.swipe_right) {
            throw new Error('You need to define swipe_right');
        }
        if (!config.swipe_up) {
            throw new Error('You need to define swipe_up');
        }
        if (!config.swipe_down) {
            throw new Error('You need to define swipe_down');
        }
        if (!config.tap_action) {
            throw new Error('You need to define tap_action');
        }

        this.config = config;
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns. A height of 1 is 
    // equivalent to 50 pixels.
    getCardSize() {
        return 9;
    }

    static getConfigElement() {
        return document.createElement("swipe-navigation-card-editor");
    }
    static getStubConfig() {
        return {"swipe_left":{"service":"","data":{"entity_id":""}},"swipe_right":{"service":"","data":{"entity_id":""}},"swipe_up":{"service":"","data":{"entity_id":""}},"swipe_down":{"service":"","data":{"entity_id":""}},"tap_action":{"service":"","data":{"entity_id":""}},"top_button_left":{"icon":"","service":"","data":{"entity_id":""}},"top_button_middle":{"icon":"","service":"","data":{"entity_id":""}},"top_button_right":{"icon":"","service":"","data":{"entity_id":""}},"bottom_button_left":{"icon":"","service":"","data":{"entity_id":""}},"bottom_button_middle":{"icon":"","service":"","data":{"entity_id":""}},"bottom_button_right":{"icon":"","service":"","data":{"entity_id":""}},"left_button_top":{"icon":"","service":"","data":{"entity_id":""}},"left_button_middle":{"icon":"","service":"","data":{"entity_id":""}},"left_button_bottom":{"icon":"","service":"","data":{"entity_id":""}},"right_button_top":{"icon":"","service":"","hold_repeat_enabled":false,"data":{"entity_id":""}},"right_button_middle":{"icon":"","service":"","data":{"entity_id":""}},"right_button_bottom":{"icon":"","hold_repeat_enabled":false,"service":"","data":{"entity_id":""}}}
    }
}

customElements.define("swipe-navigation-card", NavigationCard);

class NavigationCardEditor extends HTMLElement {
    setConfig(config) {
      this._config = config;
    }
  
    configChanged(newConfig) {
      const event = new Event("config-changed", {
        bubbles: true,
        composed: true,
      });
      event.detail = { config: newConfig };
      this.dispatchEvent(event);
    }
  }
  
  customElements.define("swipe-navigation-card-editor", NavigationCardEditor);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "swipe-navigation-card",
    name: "Swipe Navigation Card",
    preview: false, // Optional - defaults to false
    description: "A Swipe Navigation Remote Card", // Optional
    documentationURL: "https://github.com/Tjstock/swipe-navigation-card", // Adds a help link in the frontend card editor
  });
