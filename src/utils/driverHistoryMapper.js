export function driverHistoryMapper(schedule) {
    return {
        route: {
        id: schedule.routeId._id,
        startLocation: schedule.routeId.startLocation,
        endLocation: schedule.routeId.endLocation,
        distance: schedule.routeId.distance,
        estimatedTime: schedule.routeId.estimatedTime
        },
        status: schedule.status
    };
}