/* 

Each node has:
 - name
 - serialNumber

There are two types of nodes:
1. Assembly
 - Can contain children
 - Can add children
2. Part
 - Cannot contain children
 
You must support unlimited nesting.

printTree must be generic and work for both types of nodes. 
It should print the tree structure with indentation to represent the hierarchy.

*/

interface BOMNode {
  // must define this
}

class Part {
  // must implement this
}

class Assembly {
  // must implement this
}

class TreeTools {
  static printTree(node: BOMNode, depth: number = 0): void {
    // must implement this
  }
}

class Application {
  static main() {
    const car = new Assembly('Car', 'C-001')
    const engine = new Assembly('Engine', 'E-001')
    const piston1 = new Part('Piston', 'P-001')
    const piston2 = new Part('Piston', 'P-002')
    const axleAssly = new Assembly('Axle Assembly', 'A-001')
    const axle = new Part('Axle', 'AXL-001')
    const wheel1 = new Part('Wheel', 'W-001')
    const wheel2 = new Part('Wheel', 'W-002')

    car.addChild(engine)
    car.addChild(axleAssly)

    engine.addChild(piston1)
    engine.addChild(piston2)

    axleAssly.addChild(axle)
    axleAssly.addChild(wheel1)
    axleAssly.addChild(wheel2)

    TreeTools.printTree(car)
  }
}

Application.main()
