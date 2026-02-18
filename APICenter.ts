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