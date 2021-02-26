 async handleEventClick(clickInfo: EventClickArg) {
    if(clickInfo.event._def.extendedProps.booked !== null){
      this.subscribebutton = [ 
        {
          text: 'Austragen',
          role: 'austragen',
          cssClass: 'secondary',
            handler: (austragen) => {
              this.subscribed = false;
              console.log('Ausgetragen');
            }
        },
        {
          text: 'Okay',
          role: 'okay',
          cssClass: 'secondary',
            handler: (OK) => {
              console.log('OK');
            }
        }
      ];
    }
    else{
      this.subscribebutton = [
        {
          text: 'Abbrechen',
          role: 'abbrechen',
          cssClass: 'secondary',
            handler: (abbrechen) => {
              console.log('abbrechen');
            }
        },
        {
          text: 'Buchen',
          role: 'buchen',
          cssClass: 'secondary',
            handler: (buchen) => {
              this.events.setExtendedProp('booked', this.userId);
            }
        }
      ];
    }

    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header:  clickInfo.event.title,
    subHeader: '',
    message: 'Start: ' + start + ' Uhr' + '<br>Ende: ' + end + ' Uhr',
    buttons: this.subscribebutton
    })
    
    await alert.present();

  }
