(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{LqwB:function(t,n,e){"use strict";e.r(n);var o=e("CcnG"),i=function(){},r=function(){this.title="",this.lat=37.431489,this.lng=-122.163719,this.zoom=11,this.markers=[{lat:37.431489,lng:-122.163719,label:"S",draggable:!1,title:"Stanford",www:"https://www.stanford.edu/"},{lat:37.394694,lng:-122.150333,label:"T",draggable:!1,title:"Tesla",www:"https://www.tesla.com/"},{lat:37.331681,lng:-122.0301,label:"A",draggable:!1,title:"Apple",www:"https://www.apple.com/"},{lat:37.484722,lng:-122.148333,label:"F",draggable:!1,title:"Facebook",www:"https://www.facebook.com/"}]},s=e("pMnS"),a=e("26FU"),l=e("0/uQ"),u=e("gI3B"),p=e("psW0"),c=e("wDBO"),h=e("15JJ"),d=e("67Y/"),g=e("klSw"),f=function(){},m=function(){},_=function(){function t(t){var n=this;this._boundsChangeSampleTime$=new a.a(200),this._includeInBounds$=new a.a(new Map),this.bounds$=Object(l.a)(t.load()).pipe(Object(p.a)(function(){return n._includeInBounds$}),Object(c.a)(this._boundsChangeSampleTime$.pipe(Object(h.a)(function(t){return Object(u.a)(0,t)}))),Object(d.a)(function(t){return n._generateBounds(t)}),Object(g.a)(1))}return t.prototype._generateBounds=function(t){var n=new google.maps.LatLngBounds;return t.forEach(function(t){return n.extend(t)}),n},t.prototype.addToBounds=function(t){var n=this._createIdentifier(t);if(!this._includeInBounds$.value.has(n)){var e=this._includeInBounds$.value;e.set(n,t),this._includeInBounds$.next(e)}},t.prototype.removeFromBounds=function(t){var n=this._includeInBounds$.value;n.delete(this._createIdentifier(t)),this._includeInBounds$.next(n)},t.prototype.changeFitBoundsChangeSampleTime=function(t){this._boundsChangeSampleTime$.next(t)},t.prototype.getBounds$=function(){return this.bounds$},t.prototype._createIdentifier=function(t){return t.lat+"+"+t.lng},t}(),b=e("S5bw"),y=e("6blF"),v=function(){function t(t,n){var e=this;this._loader=t,this._zone=n,this._map=new Promise(function(t){e._mapResolver=t})}return t.prototype.createMap=function(t,n){var e=this;return this._zone.runOutsideAngular(function(){return e._loader.load().then(function(){var o=new google.maps.Map(t,n);e._mapResolver(o)})})},t.prototype.setMapOptions=function(t){this._map.then(function(n){n.setOptions(t)})},t.prototype.createMarker=function(t,n){return void 0===t&&(t={}),void 0===n&&(n=!0),this._map.then(function(e){return n&&(t.map=e),new google.maps.Marker(t)})},t.prototype.createInfoWindow=function(t){return this._map.then(function(){return new google.maps.InfoWindow(t)})},t.prototype.createCircle=function(t){return this._map.then(function(n){return t.map=n,new google.maps.Circle(t)})},t.prototype.createRectangle=function(t){return this._map.then(function(n){return t.map=n,new google.maps.Rectangle(t)})},t.prototype.createPolyline=function(t){return this.getNativeMap().then(function(n){var e=new google.maps.Polyline(t);return e.setMap(n),e})},t.prototype.createPolygon=function(t){return this.getNativeMap().then(function(n){var e=new google.maps.Polygon(t);return e.setMap(n),e})},t.prototype.createDataLayer=function(t){return this._map.then(function(n){var e=new google.maps.Data(t);return e.setMap(n),e})},t.prototype.containsLocation=function(t,n){return google.maps.geometry.poly.containsLocation(t,n)},t.prototype.subscribeToMapEvent=function(t){var n=this;return new y.a(function(e){n._map.then(function(o){o.addListener(t,function(t){n._zone.run(function(){return e.next(t)})})})})},t.prototype.clearInstanceListeners=function(){this._map.then(function(t){google.maps.event.clearInstanceListeners(t)})},t.prototype.setCenter=function(t){return this._map.then(function(n){return n.setCenter(t)})},t.prototype.getZoom=function(){return this._map.then(function(t){return t.getZoom()})},t.prototype.getBounds=function(){return this._map.then(function(t){return t.getBounds()})},t.prototype.getMapTypeId=function(){return this._map.then(function(t){return t.getMapTypeId()})},t.prototype.setZoom=function(t){return this._map.then(function(n){return n.setZoom(t)})},t.prototype.getCenter=function(){return this._map.then(function(t){return t.getCenter()})},t.prototype.panTo=function(t){return this._map.then(function(n){return n.panTo(t)})},t.prototype.panBy=function(t,n){return this._map.then(function(e){return e.panBy(t,n)})},t.prototype.fitBounds=function(t){return this._map.then(function(n){return n.fitBounds(t)})},t.prototype.panToBounds=function(t){return this._map.then(function(n){return n.panToBounds(t)})},t.prototype.getNativeMap=function(){return this._map},t.prototype.triggerMapEvent=function(t){return this._map.then(function(n){return google.maps.event.trigger(n,t)})},t}(),w=function(){function t(t,n){this._mapsWrapper=t,this._zone=n,this._markers=new Map}return t.prototype.deleteMarker=function(t){var n=this,e=this._markers.get(t);return null==e?Promise.resolve():e.then(function(e){return n._zone.run(function(){e.setMap(null),n._markers.delete(t)})})},t.prototype.updateMarkerPosition=function(t){return this._markers.get(t).then(function(n){return n.setPosition({lat:t.latitude,lng:t.longitude})})},t.prototype.updateTitle=function(t){return this._markers.get(t).then(function(n){return n.setTitle(t.title)})},t.prototype.updateLabel=function(t){return this._markers.get(t).then(function(n){n.setLabel(t.label)})},t.prototype.updateDraggable=function(t){return this._markers.get(t).then(function(n){return n.setDraggable(t.draggable)})},t.prototype.updateIcon=function(t){return this._markers.get(t).then(function(n){return n.setIcon(t.iconUrl)})},t.prototype.updateOpacity=function(t){return this._markers.get(t).then(function(n){return n.setOpacity(t.opacity)})},t.prototype.updateVisible=function(t){return this._markers.get(t).then(function(n){return n.setVisible(t.visible)})},t.prototype.updateZIndex=function(t){return this._markers.get(t).then(function(n){return n.setZIndex(t.zIndex)})},t.prototype.updateClickable=function(t){return this._markers.get(t).then(function(n){return n.setClickable(t.clickable)})},t.prototype.updateAnimation=function(t){return this._markers.get(t).then(function(n){n.setAnimation("string"==typeof t.animation?google.maps.Animation[t.animation]:t.animation)})},t.prototype.addMarker=function(t){var n=this._mapsWrapper.createMarker({position:{lat:t.latitude,lng:t.longitude},label:t.label,draggable:t.draggable,icon:t.iconUrl,opacity:t.opacity,visible:t.visible,zIndex:t.zIndex,title:t.title,clickable:t.clickable,animation:"string"==typeof t.animation?google.maps.Animation[t.animation]:t.animation});this._markers.set(t,n)},t.prototype.getNativeMarker=function(t){return this._markers.get(t)},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){e._markers.get(n).then(function(n){n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})})})},t}(),k=function(){function t(t,n,e){this._mapsWrapper=t,this._zone=n,this._markerManager=e,this._infoWindows=new Map}return t.prototype.deleteInfoWindow=function(t){var n=this,e=this._infoWindows.get(t);return null==e?Promise.resolve():e.then(function(e){return n._zone.run(function(){e.close(),n._infoWindows.delete(t)})})},t.prototype.setPosition=function(t){return this._infoWindows.get(t).then(function(n){return n.setPosition({lat:t.latitude,lng:t.longitude})})},t.prototype.setZIndex=function(t){return this._infoWindows.get(t).then(function(n){return n.setZIndex(t.zIndex)})},t.prototype.open=function(t){var n=this;return this._infoWindows.get(t).then(function(e){return null!=t.hostMarker?n._markerManager.getNativeMarker(t.hostMarker).then(function(t){return n._mapsWrapper.getNativeMap().then(function(n){return e.open(n,t)})}):n._mapsWrapper.getNativeMap().then(function(t){return e.open(t)})})},t.prototype.close=function(t){return this._infoWindows.get(t).then(function(t){return t.close()})},t.prototype.setOptions=function(t,n){return this._infoWindows.get(t).then(function(t){return t.setOptions(n)})},t.prototype.addInfoWindow=function(t){var n={content:t.content,maxWidth:t.maxWidth,zIndex:t.zIndex,disableAutoPan:t.disableAutoPan};"number"==typeof t.latitude&&"number"==typeof t.longitude&&(n.position={lat:t.latitude,lng:t.longitude});var e=this._mapsWrapper.createInfoWindow(n);this._infoWindows.set(t,e)},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){e._infoWindows.get(n).then(function(n){n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})})})},t}(),C=0,O=function(){function t(t,n){this._infoWindowManager=t,this._el=n,this.isOpen=!1,this.infoWindowClose=new o.EventEmitter,this._infoWindowAddedToManager=!1,this._id=(C++).toString()}return t.prototype.ngOnInit=function(){this.content=this._el.nativeElement.querySelector(".agm-info-window-content"),this._infoWindowManager.addInfoWindow(this),this._infoWindowAddedToManager=!0,this._updateOpenState(),this._registerEventListeners()},t.prototype.ngOnChanges=function(t){this._infoWindowAddedToManager&&((t.latitude||t.longitude)&&"number"==typeof this.latitude&&"number"==typeof this.longitude&&this._infoWindowManager.setPosition(this),t.zIndex&&this._infoWindowManager.setZIndex(this),t.isOpen&&this._updateOpenState(),this._setInfoWindowOptions(t))},t.prototype._registerEventListeners=function(){var t=this;this._infoWindowManager.createEventObservable("closeclick",this).subscribe(function(){t.isOpen=!1,t.infoWindowClose.emit()})},t.prototype._updateOpenState=function(){this.isOpen?this.open():this.close()},t.prototype._setInfoWindowOptions=function(n){var e={};Object.keys(n).filter(function(n){return-1!==t._infoWindowOptionsInputs.indexOf(n)}).forEach(function(t){e[t]=n[t].currentValue}),this._infoWindowManager.setOptions(this,e)},t.prototype.open=function(){return this._infoWindowManager.open(this)},t.prototype.close=function(){var t=this;return this._infoWindowManager.close(this).then(function(){t.infoWindowClose.emit()})},t.prototype.id=function(){return this._id},t.prototype.toString=function(){return"AgmInfoWindow-"+this._id.toString()},t.prototype.ngOnDestroy=function(){this._infoWindowManager.deleteInfoWindow(this)},t._infoWindowOptionsInputs=["disableAutoPan","maxWidth"],t}(),M=0,I=function(){function t(t){this._markerManager=t,this.draggable=!1,this.visible=!0,this.openInfoWindow=!0,this.opacity=1,this.zIndex=1,this.clickable=!0,this.markerClick=new o.EventEmitter,this.markerRightClick=new o.EventEmitter,this.dragEnd=new o.EventEmitter,this.mouseOver=new o.EventEmitter,this.mouseOut=new o.EventEmitter,this.infoWindow=new o.QueryList,this._markerAddedToManger=!1,this._observableSubscriptions=[],this._fitBoundsDetails$=new b.a(1),this._id=(M++).toString()}return t.prototype.ngAfterContentInit=function(){var t=this;this.handleInfoWindowUpdate(),this.infoWindow.changes.subscribe(function(){return t.handleInfoWindowUpdate()})},t.prototype.handleInfoWindowUpdate=function(){var t=this;if(this.infoWindow.length>1)throw new Error("Expected no more than one info window.");this.infoWindow.forEach(function(n){n.hostMarker=t})},t.prototype.ngOnChanges=function(t){if("string"==typeof this.latitude&&(this.latitude=Number(this.latitude)),"string"==typeof this.longitude&&(this.longitude=Number(this.longitude)),"number"==typeof this.latitude&&"number"==typeof this.longitude){if(!this._markerAddedToManger)return this._markerManager.addMarker(this),this._updateFitBoundsDetails(),this._markerAddedToManger=!0,void this._addEventListeners();(t.latitude||t.longitude)&&(this._markerManager.updateMarkerPosition(this),this._updateFitBoundsDetails()),t.title&&this._markerManager.updateTitle(this),t.label&&this._markerManager.updateLabel(this),t.draggable&&this._markerManager.updateDraggable(this),t.iconUrl&&this._markerManager.updateIcon(this),t.opacity&&this._markerManager.updateOpacity(this),t.visible&&this._markerManager.updateVisible(this),t.zIndex&&this._markerManager.updateZIndex(this),t.clickable&&this._markerManager.updateClickable(this),t.animation&&this._markerManager.updateAnimation(this)}},t.prototype.getFitBoundsDetails$=function(){return this._fitBoundsDetails$.asObservable()},t.prototype._updateFitBoundsDetails=function(){this._fitBoundsDetails$.next({latLng:{lat:this.latitude,lng:this.longitude}})},t.prototype._addEventListeners=function(){var t=this,n=this._markerManager.createEventObservable("click",this).subscribe(function(){t.openInfoWindow&&t.infoWindow.forEach(function(t){return t.open()}),t.markerClick.emit(t)});this._observableSubscriptions.push(n);var e=this._markerManager.createEventObservable("rightclick",this).subscribe(function(){t.markerRightClick.emit(null)});this._observableSubscriptions.push(e);var o=this._markerManager.createEventObservable("dragend",this).subscribe(function(n){t.dragEnd.emit({coords:{lat:n.latLng.lat(),lng:n.latLng.lng()}})});this._observableSubscriptions.push(o);var i=this._markerManager.createEventObservable("mouseover",this).subscribe(function(n){t.mouseOver.emit({coords:{lat:n.latLng.lat(),lng:n.latLng.lng()}})});this._observableSubscriptions.push(i);var r=this._markerManager.createEventObservable("mouseout",this).subscribe(function(n){t.mouseOut.emit({coords:{lat:n.latLng.lat(),lng:n.latLng.lng()}})});this._observableSubscriptions.push(r)},t.prototype.id=function(){return this._id},t.prototype.toString=function(){return"AgmMarker-"+this._id.toString()},t.prototype.ngOnDestroy=function(){this._markerManager.deleteMarker(this),this._observableSubscriptions.forEach(function(t){return t.unsubscribe()})},t}(),W=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function E(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"div",[["class","agm-info-window-content"]],null,null,null,null,null)),o["\u0275ncd"](null,0)],null,null)}var P=function(){function t(t,n){this._apiWrapper=t,this._zone=n,this._circles=new Map}return t.prototype.addCircle=function(t){this._circles.set(t,this._apiWrapper.createCircle({center:{lat:t.latitude,lng:t.longitude},clickable:t.clickable,draggable:t.draggable,editable:t.editable,fillColor:t.fillColor,fillOpacity:t.fillOpacity,radius:t.radius,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokePosition:t.strokePosition,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex}))},t.prototype.removeCircle=function(t){var n=this;return this._circles.get(t).then(function(e){e.setMap(null),n._circles.delete(t)})},t.prototype.setOptions=function(t,n){return this._circles.get(t).then(function(t){return t.setOptions(n)})},t.prototype.getBounds=function(t){return this._circles.get(t).then(function(t){return t.getBounds()})},t.prototype.getCenter=function(t){return this._circles.get(t).then(function(t){return t.getCenter()})},t.prototype.getRadius=function(t){return this._circles.get(t).then(function(t){return t.getRadius()})},t.prototype.setCenter=function(t){return this._circles.get(t).then(function(n){return n.setCenter({lat:t.latitude,lng:t.longitude})})},t.prototype.setEditable=function(t){return this._circles.get(t).then(function(n){return n.setEditable(t.editable)})},t.prototype.setDraggable=function(t){return this._circles.get(t).then(function(n){return n.setDraggable(t.draggable)})},t.prototype.setVisible=function(t){return this._circles.get(t).then(function(n){return n.setVisible(t.visible)})},t.prototype.setRadius=function(t){return this._circles.get(t).then(function(n){return n.setRadius(t.radius)})},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){var i=null;return e._circles.get(n).then(function(n){i=n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})}),function(){null!==i&&i.remove()}})},t}(),T=function(){function t(t,n){this._apiWrapper=t,this._zone=n,this._rectangles=new Map}return t.prototype.addRectangle=function(t){this._rectangles.set(t,this._apiWrapper.createRectangle({bounds:{north:t.north,east:t.east,south:t.south,west:t.west},clickable:t.clickable,draggable:t.draggable,editable:t.editable,fillColor:t.fillColor,fillOpacity:t.fillOpacity,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokePosition:t.strokePosition,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex}))},t.prototype.removeRectangle=function(t){var n=this;return this._rectangles.get(t).then(function(e){e.setMap(null),n._rectangles.delete(t)})},t.prototype.setOptions=function(t,n){return this._rectangles.get(t).then(function(t){return t.setOptions(n)})},t.prototype.getBounds=function(t){return this._rectangles.get(t).then(function(t){return t.getBounds()})},t.prototype.setBounds=function(t){return this._rectangles.get(t).then(function(n){return n.setBounds({north:t.north,east:t.east,south:t.south,west:t.west})})},t.prototype.setEditable=function(t){return this._rectangles.get(t).then(function(n){return n.setEditable(t.editable)})},t.prototype.setDraggable=function(t){return this._rectangles.get(t).then(function(n){return n.setDraggable(t.draggable)})},t.prototype.setVisible=function(t){return this._rectangles.get(t).then(function(n){return n.setVisible(t.visible)})},t.prototype.createEventObservable=function(t,n){var e=this;return y.a.create(function(o){var i=null;return e._rectangles.get(n).then(function(n){i=n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})}),function(){null!==i&&i.remove()}})},t}(),B=function(){function t(t,n){this._mapsWrapper=t,this._zone=n,this._polylines=new Map}return t._convertPoints=function(t){return t._getPoints().map(function(t){return{lat:t.latitude,lng:t.longitude}})},t.prototype.addPolyline=function(n){var e=t._convertPoints(n),o=this._mapsWrapper.createPolyline({clickable:n.clickable,draggable:n.draggable,editable:n.editable,geodesic:n.geodesic,strokeColor:n.strokeColor,strokeOpacity:n.strokeOpacity,strokeWeight:n.strokeWeight,visible:n.visible,zIndex:n.zIndex,path:e});this._polylines.set(n,o)},t.prototype.updatePolylinePoints=function(n){var e=this,o=t._convertPoints(n),i=this._polylines.get(n);return null==i?Promise.resolve():i.then(function(t){return e._zone.run(function(){t.setPath(o)})})},t.prototype.setPolylineOptions=function(t,n){return this._polylines.get(t).then(function(t){t.setOptions(n)})},t.prototype.deletePolyline=function(t){var n=this,e=this._polylines.get(t);return null==e?Promise.resolve():e.then(function(e){return n._zone.run(function(){e.setMap(null),n._polylines.delete(t)})})},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){e._polylines.get(n).then(function(n){n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})})})},t}(),z=function(){function t(t,n){this._mapsWrapper=t,this._zone=n,this._polygons=new Map}return t.prototype.addPolygon=function(t){var n=this._mapsWrapper.createPolygon({clickable:t.clickable,draggable:t.draggable,editable:t.editable,fillColor:t.fillColor,fillOpacity:t.fillOpacity,geodesic:t.geodesic,paths:t.paths,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex});this._polygons.set(t,n)},t.prototype.updatePolygon=function(t){var n=this,e=this._polygons.get(t);return null==e?Promise.resolve():e.then(function(e){return n._zone.run(function(){e.setPaths(t.paths)})})},t.prototype.setPolygonOptions=function(t,n){return this._polygons.get(t).then(function(t){t.setOptions(n)})},t.prototype.deletePolygon=function(t){var n=this,e=this._polygons.get(t);return null==e?Promise.resolve():e.then(function(e){return n._zone.run(function(){e.setMap(null),n._polygons.delete(t)})})},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){e._polygons.get(n).then(function(n){n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})})})},t}(),L=function(){function t(t,n){this._wrapper=t,this._zone=n,this._layers=new Map}return t.prototype.addKmlLayer=function(t){var n=this._wrapper.getNativeMap().then(function(n){return new google.maps.KmlLayer({clickable:t.clickable,map:n,preserveViewport:t.preserveViewport,screenOverlays:t.screenOverlays,suppressInfoWindows:t.suppressInfoWindows,url:t.url,zIndex:t.zIndex})});this._layers.set(t,n)},t.prototype.setOptions=function(t,n){this._layers.get(t).then(function(t){return t.setOptions(n)})},t.prototype.deleteKmlLayer=function(t){var n=this;this._layers.get(t).then(function(e){e.setMap(null),n._layers.delete(t)})},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){e._layers.get(n).then(function(n){n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})})})},t}(),S=function(){function t(t,n){this._wrapper=t,this._zone=n,this._layers=new Map}return t.prototype.addDataLayer=function(t){var n=this,e=this._wrapper.createDataLayer({style:t.style}).then(function(e){return t.geoJson&&n.getDataFeatures(e,t.geoJson).then(function(t){return e.features=t}),e});this._layers.set(t,e)},t.prototype.deleteDataLayer=function(t){var n=this;this._layers.get(t).then(function(e){e.setMap(null),n._layers.delete(t)})},t.prototype.updateGeoJson=function(t,n){var e=this;this._layers.get(t).then(function(t){t.forEach(function(n){t.remove(n);var e=t.features.indexOf(n,0);e>-1&&t.features.splice(e,1)}),e.getDataFeatures(t,n).then(function(n){return t.features=n})})},t.prototype.setDataOptions=function(t,n){this._layers.get(t).then(function(t){t.setControlPosition(n.controlPosition),t.setControls(n.controls),t.setDrawingMode(n.drawingMode),t.setStyle(n.style)})},t.prototype.createEventObservable=function(t,n){var e=this;return new y.a(function(o){e._layers.get(n).then(function(n){n.addListener(t,function(t){return e._zone.run(function(){return o.next(t)})})})})},t.prototype.getDataFeatures=function(t,n){return new Promise(function(e,o){if("object"==typeof n)try{e(t.addGeoJson(n))}catch(t){o(t)}else"string"==typeof n?t.loadGeoJson(n,null,e):o("Impossible to extract features from geoJson: wrong argument type")})},t}(),x=function(){function t(t,n,e){this._elem=t,this._mapsWrapper=n,this._fitBoundsService=e,this.longitude=0,this.latitude=0,this.zoom=8,this.draggable=!0,this.disableDoubleClickZoom=!1,this.disableDefaultUI=!1,this.scrollwheel=!0,this.keyboardShortcuts=!0,this.zoomControl=!0,this.styles=[],this.usePanning=!1,this.streetViewControl=!0,this.fitBounds=!1,this.scaleControl=!1,this.mapTypeControl=!1,this.panControl=!1,this.rotateControl=!1,this.fullscreenControl=!1,this.mapTypeId="roadmap",this.clickableIcons=!0,this.gestureHandling="auto",this._observableSubscriptions=[],this.mapClick=new o.EventEmitter,this.mapRightClick=new o.EventEmitter,this.mapDblClick=new o.EventEmitter,this.centerChange=new o.EventEmitter,this.boundsChange=new o.EventEmitter,this.mapTypeIdChange=new o.EventEmitter,this.idle=new o.EventEmitter,this.zoomChange=new o.EventEmitter,this.mapReady=new o.EventEmitter}return t.prototype.ngOnInit=function(){var t=this._elem.nativeElement.querySelector(".agm-map-container-inner");this._initMapInstance(t)},t.prototype._initMapInstance=function(t){var n=this;this._mapsWrapper.createMap(t,{center:{lat:this.latitude||0,lng:this.longitude||0},zoom:this.zoom,minZoom:this.minZoom,maxZoom:this.maxZoom,disableDefaultUI:this.disableDefaultUI,disableDoubleClickZoom:this.disableDoubleClickZoom,scrollwheel:this.scrollwheel,backgroundColor:this.backgroundColor,draggable:this.draggable,draggableCursor:this.draggableCursor,draggingCursor:this.draggingCursor,keyboardShortcuts:this.keyboardShortcuts,styles:this.styles,zoomControl:this.zoomControl,zoomControlOptions:this.zoomControlOptions,streetViewControl:this.streetViewControl,streetViewControlOptions:this.streetViewControlOptions,scaleControl:this.scaleControl,scaleControlOptions:this.scaleControlOptions,mapTypeControl:this.mapTypeControl,mapTypeControlOptions:this.mapTypeControlOptions,panControl:this.panControl,panControlOptions:this.panControlOptions,rotateControl:this.rotateControl,rotateControlOptions:this.rotateControlOptions,fullscreenControl:this.fullscreenControl,fullscreenControlOptions:this.fullscreenControlOptions,mapTypeId:this.mapTypeId,clickableIcons:this.clickableIcons,gestureHandling:this.gestureHandling}).then(function(){return n._mapsWrapper.getNativeMap()}).then(function(t){return n.mapReady.emit(t)}),this._handleMapCenterChange(),this._handleMapZoomChange(),this._handleMapMouseEvents(),this._handleBoundsChange(),this._handleMapTypeIdChange(),this._handleIdleEvent()},t.prototype.ngOnDestroy=function(){this._observableSubscriptions.forEach(function(t){return t.unsubscribe()}),this._mapsWrapper.clearInstanceListeners(),this._fitBoundsSubscription&&this._fitBoundsSubscription.unsubscribe()},t.prototype.ngOnChanges=function(t){this._updateMapOptionsChanges(t),this._updatePosition(t)},t.prototype._updateMapOptionsChanges=function(n){var e={};Object.keys(n).filter(function(n){return-1!==t._mapOptionsAttributes.indexOf(n)}).forEach(function(t){e[t]=n[t].currentValue}),this._mapsWrapper.setMapOptions(e)},t.prototype.triggerResize=function(t){var n=this;return void 0===t&&(t=!0),new Promise(function(e){setTimeout(function(){return n._mapsWrapper.triggerMapEvent("resize").then(function(){t&&(null!=n.fitBounds?n._fitBounds():n._setCenter()),e()})})})},t.prototype._updatePosition=function(t){(null!=t.latitude||null!=t.longitude||t.fitBounds)&&("fitBounds"in t?this._fitBounds():"number"==typeof this.latitude&&"number"==typeof this.longitude&&this._setCenter())},t.prototype._setCenter=function(){var t={lat:this.latitude,lng:this.longitude};this.usePanning?this._mapsWrapper.panTo(t):this._mapsWrapper.setCenter(t)},t.prototype._fitBounds=function(){switch(this.fitBounds){case!0:this._subscribeToFitBoundsUpdates();break;case!1:this._fitBoundsSubscription&&this._fitBoundsSubscription.unsubscribe();break;default:this._updateBounds(this.fitBounds)}},t.prototype._subscribeToFitBoundsUpdates=function(){var t=this;this._fitBoundsSubscription=this._fitBoundsService.getBounds$().subscribe(function(n){return t._updateBounds(n)})},t.prototype._updateBounds=function(t){if(this._isLatLngBoundsLiteral(t)&&google&&google.maps){var n=google.maps.LatLngBounds();n.union(t),t=n}this.usePanning?this._mapsWrapper.panToBounds(t):this._mapsWrapper.fitBounds(t)},t.prototype._isLatLngBoundsLiteral=function(t){return null!=t&&void 0===t.extend},t.prototype._handleMapCenterChange=function(){var t=this,n=this._mapsWrapper.subscribeToMapEvent("center_changed").subscribe(function(){t._mapsWrapper.getCenter().then(function(n){t.latitude=n.lat(),t.longitude=n.lng(),t.centerChange.emit({lat:t.latitude,lng:t.longitude})})});this._observableSubscriptions.push(n)},t.prototype._handleBoundsChange=function(){var t=this,n=this._mapsWrapper.subscribeToMapEvent("bounds_changed").subscribe(function(){t._mapsWrapper.getBounds().then(function(n){t.boundsChange.emit(n)})});this._observableSubscriptions.push(n)},t.prototype._handleMapTypeIdChange=function(){var t=this,n=this._mapsWrapper.subscribeToMapEvent("maptypeid_changed").subscribe(function(){t._mapsWrapper.getMapTypeId().then(function(n){t.mapTypeIdChange.emit(n)})});this._observableSubscriptions.push(n)},t.prototype._handleMapZoomChange=function(){var t=this,n=this._mapsWrapper.subscribeToMapEvent("zoom_changed").subscribe(function(){t._mapsWrapper.getZoom().then(function(n){t.zoom=n,t.zoomChange.emit(n)})});this._observableSubscriptions.push(n)},t.prototype._handleIdleEvent=function(){var t=this,n=this._mapsWrapper.subscribeToMapEvent("idle").subscribe(function(){t.idle.emit(void 0)});this._observableSubscriptions.push(n)},t.prototype._handleMapMouseEvents=function(){var t=this;[{name:"click",emitter:this.mapClick},{name:"rightclick",emitter:this.mapRightClick},{name:"dblclick",emitter:this.mapDblClick}].forEach(function(n){var e=t._mapsWrapper.subscribeToMapEvent(n.name).subscribe(function(t){var e={coords:{lat:t.latLng.lat(),lng:t.latLng.lng()}};n.emitter.emit(e)});t._observableSubscriptions.push(e)})},t._mapOptionsAttributes=["disableDoubleClickZoom","scrollwheel","draggable","draggableCursor","draggingCursor","keyboardShortcuts","zoomControl","zoomControlOptions","styles","streetViewControl","streetViewControlOptions","zoom","mapTypeControl","mapTypeControlOptions","minZoom","maxZoom","panControl","panControlOptions","rotateControl","rotateControlOptions","fullscreenControl","fullscreenControlOptions","scaleControl","scaleControlOptions","mapTypeId","clickableIcons","gestureHandling"],t}(),D=o["\u0275crt"]({encapsulation:0,styles:[".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"],data:{}});function A(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,0,"div",[["class","agm-map-container-inner sebm-google-map-container-inner"]],null,null,null,null,null)),(t()(),o["\u0275eld"](1,0,null,null,1,"div",[["class","agm-map-content"]],null,null,null,null,null)),o["\u0275ncd"](null,0)],null,null)}var R=e("Ip0R"),N=o["\u0275crt"]({encapsulation:0,styles:[["agm-map[_ngcontent-%COMP%]{height:360px}"]],data:{}});function Z(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,8,"agm-marker",[],null,null,null,null,null)),o["\u0275prd"](6144,null,m,null,[I]),o["\u0275did"](2,1720320,null,1,I,[w],{latitude:[0,"latitude"],longitude:[1,"longitude"],title:[2,"title"],label:[3,"label"]},null),o["\u0275qud"](603979776,1,{infoWindow:1}),(t()(),o["\u0275eld"](4,0,null,null,4,"agm-info-window",[],null,null,null,E,W)),o["\u0275did"](5,770048,[[1,4]],0,O,[k,o.ElementRef],{disableAutoPan:[0,"disableAutoPan"]},null),(t()(),o["\u0275eld"](6,0,null,0,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(t()(),o["\u0275eld"](7,0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),o["\u0275ted"](8,null,["",""]))],function(t,n){t(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,n.context.$implicit.title,n.context.$implicit.label),t(n,5,0,!1)},function(t,n){t(n,6,0,o["\u0275inlineInterpolate"](1,"",n.context.$implicit.www,"")),t(n,8,0,n.context.$implicit.title)})}function F(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,27,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(t()(),o["\u0275eld"](1,0,null,null,26,"div",[["class","card"]],null,null,null,null,null)),(t()(),o["\u0275eld"](2,0,null,null,8,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),o["\u0275eld"](3,0,null,null,0,"i",[["class","icon-map"]],null,null,null,null,null)),(t()(),o["\u0275ted"](-1,null,[" Google Maps "])),(t()(),o["\u0275eld"](5,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(t()(),o["\u0275ted"](-1,null,["CoreUI Pro Component"])),(t()(),o["\u0275eld"](7,0,null,null,3,"div",[["class","card-header-actions"]],null,null,null,null,null)),(t()(),o["\u0275eld"](8,0,null,null,2,"a",[["class","card-header-action"],["href","https://github.com/SebastianM/angular-google-maps"],["target","_blank"]],null,null,null,null,null)),(t()(),o["\u0275eld"](9,0,null,null,1,"small",[["class","text-muted"]],null,null,null,null,null)),(t()(),o["\u0275ted"](-1,null,["docs"])),(t()(),o["\u0275eld"](11,0,null,null,16,"div",[["class","card-body"]],null,null,null,null,null)),(t()(),o["\u0275eld"](12,0,null,null,1,"small",[],null,null,null,null,null)),(t()(),o["\u0275ted"](13,null,["",""])),(t()(),o["\u0275eld"](14,0,null,null,13,"agm-map",[],[[2,"sebm-google-map-container",null]],null,null,A,D)),o["\u0275prd"](4608,null,w,w,[v,o.NgZone]),o["\u0275prd"](4608,null,k,k,[v,o.NgZone,w]),o["\u0275prd"](4608,null,P,P,[v,o.NgZone]),o["\u0275prd"](4608,null,T,T,[v,o.NgZone]),o["\u0275prd"](4608,null,B,B,[v,o.NgZone]),o["\u0275prd"](4608,null,z,z,[v,o.NgZone]),o["\u0275prd"](4608,null,L,L,[v,o.NgZone]),o["\u0275prd"](4608,null,S,S,[v,o.NgZone]),o["\u0275prd"](512,null,v,v,[f,o.NgZone]),o["\u0275prd"](512,null,_,_,[f]),o["\u0275did"](25,770048,null,0,x,[o.ElementRef,v,_],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"]},null),(t()(),o["\u0275and"](16777216,null,0,1,null,Z)),o["\u0275did"](27,278528,null,0,R.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var e=n.component;t(n,25,0,e.lng,e.lat,e.zoom),t(n,27,0,e.markers)},function(t,n){t(n,13,0,n.component.title),t(n,14,0,!0)})}var $,V=o["\u0275ccf"]("app-root",r,function(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,F,N)),o["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),j=e("gIcY"),U=function(){function t(){}return t.prototype.getNativeWindow=function(){return window},t}(),H=function(){function t(){}return t.prototype.getNativeDocument=function(){return document},t}(),J=[U,H],G=($=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}$(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),K=function(t){return t[t.HTTP=1]="HTTP",t[t.HTTPS=2]="HTTPS",t[t.AUTO=3]="AUTO",t}({}),Y=new o.InjectionToken("angular-google-maps LAZY_MAPS_API_CONFIG"),q=function(t){function n(n,e,o){void 0===n&&(n=null);var i=t.call(this)||this;return i._SCRIPT_ID="agmGoogleMapsApiScript",i.callbackName="agmLazyMapsAPILoader",i._config=n||{},i._windowRef=e,i._documentRef=o,i}return G(n,t),n.prototype.load=function(){var t=this._windowRef.getNativeWindow();if(t.google&&t.google.maps)return Promise.resolve();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;var n=this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);if(n)return this._assignScriptLoadingPromise(n),this._scriptLoadingPromise;var e=this._documentRef.getNativeDocument().createElement("script");return e.type="text/javascript",e.async=!0,e.defer=!0,e.id=this._SCRIPT_ID,e.src=this._getScriptSrc(this.callbackName),this._assignScriptLoadingPromise(e),this._documentRef.getNativeDocument().body.appendChild(e),this._scriptLoadingPromise},n.prototype._assignScriptLoadingPromise=function(t){var n=this;this._scriptLoadingPromise=new Promise(function(e,o){n._windowRef.getNativeWindow()[n.callbackName]=function(){e()},t.onerror=function(t){o(t)}})},n.prototype._getScriptSrc=function(t){var n;switch(this._config&&this._config.protocol||K.HTTPS){case K.AUTO:n="";break;case K.HTTP:n="http:";break;case K.HTTPS:n="https:"}var e={v:this._config.apiVersion||"3",callback:t,key:this._config.apiKey,client:this._config.clientId,channel:this._config.channel,libraries:this._config.libraries,region:this._config.region,language:this._config.language};return n+"//"+(this._config.hostAndPath||"maps.googleapis.com/maps/api/js")+"?"+Object.keys(e).filter(function(t){return null!=e[t]}).filter(function(t){return!Array.isArray(e[t])||Array.isArray(e[t])&&e[t].length>0}).map(function(t){var n=e[t];return Array.isArray(n)?{key:t,value:n.join(",")}:{key:t,value:e[t]}}).map(function(t){return t.key+"="+t.value}).join("&")},n}(f),Q=e("ZYCi"),X={title:"Google Maps"},tt=function(){};e("K9Ia"),e("ad02"),e("ny24");var nt=function(){function t(){}return t.forRoot=function(n){return{ngModule:t,providers:J.concat([{provide:f,useClass:q},{provide:Y,useValue:n}])}},t}();e.d(n,"GoogleMapsModuleNgFactory",function(){return et});var et=o["\u0275cmf"](i,[r],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,V]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,j["\u0275angular_packages_forms_forms_i"],j["\u0275angular_packages_forms_forms_i"],[]),o["\u0275mpd"](4608,U,U,[]),o["\u0275mpd"](4608,H,H,[]),o["\u0275mpd"](4608,f,q,[[2,Y],U,H]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,j["\u0275angular_packages_forms_forms_bb"],j["\u0275angular_packages_forms_forms_bb"],[]),o["\u0275mpd"](1073742336,j.FormsModule,j.FormsModule,[]),o["\u0275mpd"](1073742336,Q.p,Q.p,[[2,Q.v],[2,Q.l]]),o["\u0275mpd"](1073742336,tt,tt,[]),o["\u0275mpd"](1073742336,nt,nt,[]),o["\u0275mpd"](1073742336,i,i,[]),o["\u0275mpd"](1024,Q.j,function(){return[[{path:"",component:r,data:X}]]},[]),o["\u0275mpd"](256,Y,{apiKey:"AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA"},[])])})}}]);