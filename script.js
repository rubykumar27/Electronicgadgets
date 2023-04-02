$(function () {
    $('#QuestionOptions').change(function () {
        $('#myAnswers > div').hide();
        $('#myAnswers').find('#' + $(this).val()).fadeIn('slow');
    });
});