/**
 * Created by tntdi_000 on 8/11/2016.
 */

describe('timeAgo Filter', function () {
    beforeEach(module('filtersApp'));
    
    var filter;
    beforeEach(inject(function (timeAgoFilter) {
        filter = timeAgoFilter;
    }));
    
    it('should respond based on timestamp', function () {
        /*The presence of new Date().getTime() makes it slightly hard to unit test deterministically.
        Ideally, we would inject a dateProvider into the timeAgo filter, but we are trying to keep
        it simple here. So we will assume that our tests are fast enough to execute in mere milliseconds.*/

        var currentTime = new Date().getTime();
        currentTime -= 10000;
        expect(filter(currentTime)).toEqual('seconds ago');
        var fewMinutesAgo = currentTime - 1000 * 60;
        expect(filter(fewMinutesAgo)).toEqual('minutes ago');
        var fewHoursAgo = currentTime - 1000 * 60 * 68;
        expect(filter(fewHoursAgo)).toEqual('hours ago');
        var fewDaysAgo = currentTime - 1000 * 60 * 60 * 26;
        expect(filter(fewDaysAgo)).toEqual('days ago');
        var fewMonthsAgo = currentTime - 1000 * 60 * 60 * 24 * 32;
        expect(filter(fewMonthsAgo)).toEqual('months ago');
    });
});