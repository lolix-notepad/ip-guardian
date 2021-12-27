class IpWhitelist {

    /* hash of IPs */
    static whitelist = {};

    /* middleware */
    static checker = (req, res, next) =>
        this.check(req, res, next);

    /* receive list of IPs */
    static setWhitelist(ipList) {
        ipList.forEach(ip => this.allow(ip));
    }

    /* allow IP */
    static allow(ip) {
        this.whitelist[ip] = 1;
    }

    /* block bad IP */
    static blocker(ip, res) {
        const error = `Bad IP: ${ip}`;
        console.log(error);
        res.status(500);
        res.send(error);
    }

    /* check if the IP is in the whitelist */
    static check(req, res, next) {
        const inComingIp = req.ip.slice(7);

        if (this.whitelist[inComingIp])
            return next();

        this.blocker(inComingIp, res);
    }
}

module.exports = IpWhitelist;
