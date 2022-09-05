import React from "react";

const HistoryTracking = () => {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          style={{ width: "100%", height: "90vh" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default HistoryTracking;
