$(document).ready(() => {
  $(function () {
    $("#datepicker").datepicker({
      dateFormat: "dd/mm/yy",
      defaultDate: new Date().getDate()
    });
  });
});
