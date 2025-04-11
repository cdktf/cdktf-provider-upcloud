# `gatewayConnectionTunnel` Submodule <a name="`gatewayConnectionTunnel` Submodule" id="@cdktf/provider-upcloud.gatewayConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnectionTunnel <a name="GatewayConnectionTunnel" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

new gatewayConnectionTunnel.GatewayConnectionTunnel(scope: Construct, id: string, config: GatewayConnectionTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig">GatewayConnectionTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig">GatewayConnectionTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk">putIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties">putIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties">resetIpsecProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpsecAuthPsk` <a name="putIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk"></a>

```typescript
public putIpsecAuthPsk(value: GatewayConnectionTunnelIpsecAuthPsk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `putIpsecProperties` <a name="putIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties"></a>

```typescript
public putIpsecProperties(value: GatewayConnectionTunnelIpsecProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpsecProperties` <a name="resetIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties"></a>

```typescript
public resetIpsecProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GatewayConnectionTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GatewayConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk">ipsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties">ipsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState">operationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput">ipsecAuthPskInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput">ipsecPropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput">localAddressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput">remoteAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName">localAddressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress">remoteAddress</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipsecAuthPsk`<sup>Required</sup> <a name="ipsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk"></a>

```typescript
public readonly ipsecAuthPsk: GatewayConnectionTunnelIpsecAuthPskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a>

---

##### `ipsecProperties`<sup>Required</sup> <a name="ipsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties"></a>

```typescript
public readonly ipsecProperties: GatewayConnectionTunnelIpsecPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a>

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState"></a>

```typescript
public readonly operationalState: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipsecAuthPskInput`<sup>Optional</sup> <a name="ipsecAuthPskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput"></a>

```typescript
public readonly ipsecAuthPskInput: GatewayConnectionTunnelIpsecAuthPsk;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `ipsecPropertiesInput`<sup>Optional</sup> <a name="ipsecPropertiesInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput"></a>

```typescript
public readonly ipsecPropertiesInput: GatewayConnectionTunnelIpsecProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `localAddressNameInput`<sup>Optional</sup> <a name="localAddressNameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput"></a>

```typescript
public readonly localAddressNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteAddressInput`<sup>Optional</sup> <a name="remoteAddressInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput"></a>

```typescript
public readonly remoteAddressInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAddressName`<sup>Required</sup> <a name="localAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName"></a>

```typescript
public readonly localAddressName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteAddress`<sup>Required</sup> <a name="remoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress"></a>

```typescript
public readonly remoteAddress: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionTunnelConfig <a name="GatewayConnectionTunnelConfig" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.Initializer"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

const gatewayConnectionTunnelConfig: gatewayConnectionTunnel.GatewayConnectionTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId">connectionId</a></code> | <code>string</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk">ipsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName">localAddressName</a></code> | <code>string</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name">name</a></code> | <code>string</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress">remoteAddress</a></code> | <code>string</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties">ipsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `ipsecAuthPsk`<sup>Required</sup> <a name="ipsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk"></a>

```typescript
public readonly ipsecAuthPsk: GatewayConnectionTunnelIpsecAuthPsk;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `localAddressName`<sup>Required</sup> <a name="localAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName"></a>

```typescript
public readonly localAddressName: string;
```

- *Type:* string

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `remoteAddress`<sup>Required</sup> <a name="remoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress"></a>

```typescript
public readonly remoteAddress: string;
```

- *Type:* string

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsecProperties`<sup>Optional</sup> <a name="ipsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties"></a>

```typescript
public readonly ipsecProperties: GatewayConnectionTunnelIpsecProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

### GatewayConnectionTunnelIpsecAuthPsk <a name="GatewayConnectionTunnelIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.Initializer"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

const gatewayConnectionTunnelIpsecAuthPsk: gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk">psk</a></code> | <code>string</code> | The pre-shared key. |

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

The pre-shared key.

This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}

---

### GatewayConnectionTunnelIpsecProperties <a name="GatewayConnectionTunnelIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.Initializer"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

const gatewayConnectionTunnelIpsecProperties: gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime">childRekeyTime</a></code> | <code>number</code> | IKE child SA rekey time in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay">dpdDelay</a></code> | <code>number</code> | Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout">dpdTimeout</a></code> | <code>number</code> | Timeout period for DPD reply before considering the peer to be dead, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime">ikeLifetime</a></code> | <code>number</code> | Maximum IKE SA lifetime in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms">phase1Algorithms</a></code> | <code>string[]</code> | List of Phase 1: Proposal algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code>number[]</code> | List of Phase 1 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | List of Phase 1 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms">phase2Algorithms</a></code> | <code>string[]</code> | List of Phase 2: Security Association algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code>number[]</code> | List of Phase 2 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | List of Phase 2 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime">rekeyTime</a></code> | <code>number</code> | IKE SA rekey time in seconds. |

---

##### `childRekeyTime`<sup>Optional</sup> <a name="childRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime"></a>

```typescript
public readonly childRekeyTime: number;
```

- *Type:* number

IKE child SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}

---

##### `dpdDelay`<sup>Optional</sup> <a name="dpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay"></a>

```typescript
public readonly dpdDelay: number;
```

- *Type:* number

Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}

---

##### `dpdTimeout`<sup>Optional</sup> <a name="dpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout"></a>

```typescript
public readonly dpdTimeout: number;
```

- *Type:* number

Timeout period for DPD reply before considering the peer to be dead, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}

---

##### `ikeLifetime`<sup>Optional</sup> <a name="ikeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime"></a>

```typescript
public readonly ikeLifetime: number;
```

- *Type:* number

Maximum IKE SA lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}

---

##### `phase1Algorithms`<sup>Optional</sup> <a name="phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms"></a>

```typescript
public readonly phase1Algorithms: string[];
```

- *Type:* string[]

List of Phase 1: Proposal algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}

---

##### `phase1DhGroupNumbers`<sup>Optional</sup> <a name="phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers"></a>

```typescript
public readonly phase1DhGroupNumbers: number[];
```

- *Type:* number[]

List of Phase 1 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}

---

##### `phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: string[];
```

- *Type:* string[]

List of Phase 1 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}

---

##### `phase2Algorithms`<sup>Optional</sup> <a name="phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms"></a>

```typescript
public readonly phase2Algorithms: string[];
```

- *Type:* string[]

List of Phase 2: Security Association algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}

---

##### `phase2DhGroupNumbers`<sup>Optional</sup> <a name="phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers"></a>

```typescript
public readonly phase2DhGroupNumbers: number[];
```

- *Type:* number[]

List of Phase 2 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}

---

##### `phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: string[];
```

- *Type:* string[]

List of Phase 2 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}

---

##### `rekeyTime`<sup>Optional</sup> <a name="rekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime"></a>

```typescript
public readonly rekeyTime: number;
```

- *Type:* number

IKE SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionTunnelIpsecAuthPskOutputReference <a name="GatewayConnectionTunnelIpsecAuthPskOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

new gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput">pskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk">psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput"></a>

```typescript
public readonly pskInput: string;
```

- *Type:* string

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GatewayConnectionTunnelIpsecAuthPsk;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---


### GatewayConnectionTunnelIpsecPropertiesOutputReference <a name="GatewayConnectionTunnelIpsecPropertiesOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer"></a>

```typescript
import { gatewayConnectionTunnel } from '@cdktf/provider-upcloud'

new gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime">resetChildRekeyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay">resetDpdDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout">resetDpdTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime">resetIkeLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms">resetPhase1Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers">resetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms">resetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms">resetPhase2Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers">resetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms">resetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime">resetRekeyTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChildRekeyTime` <a name="resetChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime"></a>

```typescript
public resetChildRekeyTime(): void
```

##### `resetDpdDelay` <a name="resetDpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay"></a>

```typescript
public resetDpdDelay(): void
```

##### `resetDpdTimeout` <a name="resetDpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout"></a>

```typescript
public resetDpdTimeout(): void
```

##### `resetIkeLifetime` <a name="resetIkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime"></a>

```typescript
public resetIkeLifetime(): void
```

##### `resetPhase1Algorithms` <a name="resetPhase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms"></a>

```typescript
public resetPhase1Algorithms(): void
```

##### `resetPhase1DhGroupNumbers` <a name="resetPhase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers"></a>

```typescript
public resetPhase1DhGroupNumbers(): void
```

##### `resetPhase1IntegrityAlgorithms` <a name="resetPhase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms"></a>

```typescript
public resetPhase1IntegrityAlgorithms(): void
```

##### `resetPhase2Algorithms` <a name="resetPhase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms"></a>

```typescript
public resetPhase2Algorithms(): void
```

##### `resetPhase2DhGroupNumbers` <a name="resetPhase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers"></a>

```typescript
public resetPhase2DhGroupNumbers(): void
```

##### `resetPhase2IntegrityAlgorithms` <a name="resetPhase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms"></a>

```typescript
public resetPhase2IntegrityAlgorithms(): void
```

##### `resetRekeyTime` <a name="resetRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime"></a>

```typescript
public resetRekeyTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput">childRekeyTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput">dpdDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput">dpdTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput">ikeLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput">phase1AlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput">phase1DhGroupNumbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput">phase1IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput">phase2AlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput">phase2DhGroupNumbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput">phase2IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput">rekeyTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime">childRekeyTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay">dpdDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout">dpdTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime">ikeLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms">phase1Algorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms">phase2Algorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime">rekeyTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childRekeyTimeInput`<sup>Optional</sup> <a name="childRekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput"></a>

```typescript
public readonly childRekeyTimeInput: number;
```

- *Type:* number

---

##### `dpdDelayInput`<sup>Optional</sup> <a name="dpdDelayInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput"></a>

```typescript
public readonly dpdDelayInput: number;
```

- *Type:* number

---

##### `dpdTimeoutInput`<sup>Optional</sup> <a name="dpdTimeoutInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput"></a>

```typescript
public readonly dpdTimeoutInput: number;
```

- *Type:* number

---

##### `ikeLifetimeInput`<sup>Optional</sup> <a name="ikeLifetimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput"></a>

```typescript
public readonly ikeLifetimeInput: number;
```

- *Type:* number

---

##### `phase1AlgorithmsInput`<sup>Optional</sup> <a name="phase1AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput"></a>

```typescript
public readonly phase1AlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="phase1DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput"></a>

```typescript
public readonly phase1DhGroupNumbersInput: number[];
```

- *Type:* number[]

---

##### `phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="phase1IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```typescript
public readonly phase1IntegrityAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `phase2AlgorithmsInput`<sup>Optional</sup> <a name="phase2AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput"></a>

```typescript
public readonly phase2AlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="phase2DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput"></a>

```typescript
public readonly phase2DhGroupNumbersInput: number[];
```

- *Type:* number[]

---

##### `phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="phase2IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```typescript
public readonly phase2IntegrityAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `rekeyTimeInput`<sup>Optional</sup> <a name="rekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput"></a>

```typescript
public readonly rekeyTimeInput: number;
```

- *Type:* number

---

##### `childRekeyTime`<sup>Required</sup> <a name="childRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime"></a>

```typescript
public readonly childRekeyTime: number;
```

- *Type:* number

---

##### `dpdDelay`<sup>Required</sup> <a name="dpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay"></a>

```typescript
public readonly dpdDelay: number;
```

- *Type:* number

---

##### `dpdTimeout`<sup>Required</sup> <a name="dpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout"></a>

```typescript
public readonly dpdTimeout: number;
```

- *Type:* number

---

##### `ikeLifetime`<sup>Required</sup> <a name="ikeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime"></a>

```typescript
public readonly ikeLifetime: number;
```

- *Type:* number

---

##### `phase1Algorithms`<sup>Required</sup> <a name="phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms"></a>

```typescript
public readonly phase1Algorithms: string[];
```

- *Type:* string[]

---

##### `phase1DhGroupNumbers`<sup>Required</sup> <a name="phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers"></a>

```typescript
public readonly phase1DhGroupNumbers: number[];
```

- *Type:* number[]

---

##### `phase1IntegrityAlgorithms`<sup>Required</sup> <a name="phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: string[];
```

- *Type:* string[]

---

##### `phase2Algorithms`<sup>Required</sup> <a name="phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms"></a>

```typescript
public readonly phase2Algorithms: string[];
```

- *Type:* string[]

---

##### `phase2DhGroupNumbers`<sup>Required</sup> <a name="phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers"></a>

```typescript
public readonly phase2DhGroupNumbers: number[];
```

- *Type:* number[]

---

##### `phase2IntegrityAlgorithms`<sup>Required</sup> <a name="phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: string[];
```

- *Type:* string[]

---

##### `rekeyTime`<sup>Required</sup> <a name="rekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime"></a>

```typescript
public readonly rekeyTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GatewayConnectionTunnelIpsecProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---



