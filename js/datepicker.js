$(document).ready(() => {
  $(function () {
    $("#datepicker").datepicker({
      dateFormat: "dd/mm/yyyy",
      defaultDate: new Date().getDate()
    });
  });
});
