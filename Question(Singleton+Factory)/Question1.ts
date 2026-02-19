class PaymentGatewaySession {

    private sessionId: string;
    private requestCount: number = 0;
    private currentSecond: number;

    constructor() {
        this.sessionId = Math.random().toString(36).substring(7);
        this.currentSecond = Math.floor(Date.now() / 1000);
        console.log("New Gateway Session Created:", this.sessionId);
    }

    makeApiCall() {
        const now = Math.floor(Date.now() / 1000);

        if (now !== this.currentSecond) {
            this.currentSecond = now;
            this.requestCount = 0;
        }

        this.requestCount++;

        if (this.requestCount > 5) {
            throw new Error("Rate limit exceeded! More than 5 requests per second.");
        }

        console.log("API Call Allowed. Count:", this.requestCount);
    }

    getSessionId(): string {
        return this.sessionId;
    }
}

class CreditCardPayment {
    process(amount: number) {
        const session = new PaymentGatewaySession();
        session.makeApiCall();
        console.log("Credit Card Payment of", amount,
                    "using session", session.getSessionId());
    }
}

class UPIPayment {
    process(amount: number) {
        const session = new PaymentGatewaySession();
        session.makeApiCall();
        console.log("UPI Payment of", amount,
                    "using session", session.getSessionId());
    }
}

class NetBankingPayment {
    process(amount: number) {
        const session = new PaymentGatewaySession();
        session.makeApiCall();
        console.log("NetBanking Payment of", amount,
                    "using session", session.getSessionId());
    }
}

const cc = new CreditCardPayment();
const upi = new UPIPayment();
const net = new NetBankingPayment();

for (let i = 0; i < 3; i++) {
    cc.process(1000 + i);
    upi.process(500 + i);
    net.process(2000 + i);
}

