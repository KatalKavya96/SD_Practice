// ===== TEAMCENTER Side =====

interface TCPart {
  item_id: string
  item_name: string
  revision: string
  serial_no: string
  lifecycle_state: 'RELEASED' | 'DRAFT'
}

class TeamcenterAPI {
  getTCPartById(id: string): TCPart {
    // Mock implementation
    return {
      item_id: id,
      item_name: 'Engine',
      revision: 'A',
      serial_no: 'TC-123',
      lifecycle_state: 'RELEASED',
    }
  }
}

// ===== SALESFORCE Side =====

interface SFAsset {
  id: string
  name: string
  serialNumber: string
  assetRevision: string
  referenceId: string
  status: 'Active' | 'Draft'
}

class SalesforceAPI {
  createSFAsset(asset: SFAsset): void {
    console.log('Created SF Asset:', asset)
  }
}

// ===== Integration Layer =====

class ConnectionService {
  savePartToSalesforce(tcPartId: string): void {
    const tcApi = new TeamcenterAPI()
    const sfApi = new SalesforceAPI()

    // Fetch part details from Teamcenter
    const tcPart = tcApi.getTCPartById(tcPartId)

    // TODO: Implement logic to save part from Teamcenter to Salesforce


    const sfAsset: SFAsset = {
      id: tcPart.item_id,
      name: tcPart.item_name,
      serialNumber: tcPart.serial_no,
      assetRevision: tcPart.revision,
      referenceId: tcPart.item_id,
      status: tcPart.lifecycle_state === 'RELEASED' ? 'Active' : 'Draft',
    }

    sfApi.createSFAsset(sfAsset)

    
  }
}

const connectionService = new ConnectionService()
connectionService.savePartToSalesforce('TC-123')


// Adapter in Typescript System Design Theory

// The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together. In the context of the provided code, the Adapter pattern is used to bridge the gap between the Teamcenter API and the Salesforce API.

// In this example, the `ConnectionService` class acts as the Adapter. It takes a Teamcenter part ID, retrieves the corresponding part details using the `TeamcenterAPI`, and then transforms that data into a format suitable for the `SalesforceAPI`. The `savePartToSalesforce` method is responsible for this transformation and for calling the appropriate method on the Salesforce API to create a new asset.

// The key benefits of using the Adapter pattern in this scenario include:

// 1. **Decoupling**: The `ConnectionService` decouples the Teamcenter and Salesforce APIs, allowing them to evolve independently without affecting each other.

// 2. **Reusability**: The Adapter can be reused for other parts or different APIs in the future, making it a flexible solution for integrating various systems.

// 3. **Single Responsibility**: Each class has a single responsibility. The `TeamcenterAPI` is responsible for fetching data from Teamcenter, while the `SalesforceAPI` is responsible for